import React, { useEffect, useState } from 'react'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { useRequest, useTitle } from 'ahooks'
import { Spin, Typography } from 'antd'
import ListSearch from '../../components/ListSearch'
import { getQuestionListService } from '../../services/question'

const { Title } = Typography

const List: React.FC = () => {
  useTitle('我的问卷')
  const { data = {}, loading } = useRequest(getQuestionListService)
  const { list: questionList = [], total = 0 } = data

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
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {/* 问卷列表 */}
        {!loading &&
          questionList.length > 0 &&
          questionList.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q}></QuestionCard>
          })}
      </div>
      <div className={styles.footer}>loadMore 上划加载更多...</div>
    </>
  )
}

export default List
