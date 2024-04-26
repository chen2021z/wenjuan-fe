import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getQuestionService } from '../services/question'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { resetComponents } from '../store/componentsReducer'

const useLoadQuestionData = () => {
  const { id = '' } = useParams()
  const dispatch = useDispatch()

  const { loading, data, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error('没有问卷 id')
      return await getQuestionService(id)
    },
    {
      manual: true,
    }
  )

  // 根据获取的 data 设置 redux store
  useEffect(() => {
    if (!data) return
    const { title = '', componentList = [] } = data

    // 获取默认的 selectedId
    let selectedId = ''
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id
    }

    dispatch(resetComponents({ componentList, selectedId }))
  }, [data])

  // id变化，重新执行 ajax 加载问卷数据
  useEffect(() => {
    run(id)
  }, [id])

  return { loading, error }
}

export default useLoadQuestionData
