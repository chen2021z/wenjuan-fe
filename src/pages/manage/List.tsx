import React, { useEffect, useRef, useState } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { useDebounceFn, useRequest, useTitle } from 'ahooks'
import { Spin, Typography } from 'antd'
import ListSearch from '../../components/ListSearch'
import { useSearchParams } from 'react-router-dom'
import { getQuestionListService } from '../../services/question'
import { LIST_PAGE_PARAM_KEY, LIST_PAGE_SIZE } from '../../constant'

const { Title } = Typography

const List: React.FC = () => {
  useTitle('我的问卷')
  const [searchParams] = useSearchParams()
  const [page, setPage] = useState(1) // List 内部的数据，不在url 参数中体现
  const [list, setList] = useState([]) // 全部的列表数据，上划加载更多
  const [total, setTotal] = useState(0)
  const havaMoreData = total > list.length
  const loadingRef = useRef<HTMLDivElement>(null)

  // 加载数据
  const { run: load, loading } = useRequest(
    async () => {
      const data = await getQuestionListService({
        page,
        pageSize: LIST_PAGE_SIZE,
        keyword: searchParams.get(LIST_PAGE_PARAM_KEY) || '',
      })
      return data
    },
    {
      manual: true,
      onSuccess(data) {
        const { list: newAddList = [], total = 0 } = data
        setList(list.concat(newAddList))
        setTotal(total)
        setPage(page + 1)
      },
    }
  )

  /** 触发加载 - 防抖 */
  const { run: tryLoadMore } = useDebounceFn(
    () => {
      const ele = loadingRef.current
      if (ele === null) return
      const { bottom } = ele.getBoundingClientRect()
      if (bottom - 500 <= window.innerHeight) {
        load()
      }
    },
    {
      wait: 500,
    }
  )

  // 1.当页面加载，或者url参数（keyword）变化时，触发加载
  useEffect(() => {
    tryLoadMore()
  }, [searchParams])

  // 2.当页面滚动时，触发加载
  useEffect(() => {
    window.addEventListener('scroll', tryLoadMore)

    return () => {
      window.removeEventListener('scroll', tryLoadMore)
    }
  }, [])

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {/* 问卷列表 */}
        {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q}></QuestionCard>
          })}
      </div>
      <div className={styles.footer}>
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        ) : (
          <div ref={loadingRef}>loadMore 上划加载更多...</div>
        )}
      </div>
    </>
  )
}

export default List
