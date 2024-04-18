import { useEffect, useState } from 'react'
import { getQuestionService } from '../services/question'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'

const useLoadQuestionData = () => {
  const { id = '' } = useParams()
  // const [loading, setLoading] = useState(true)
  // const [questionData, setQuestionData] = useState({})

  // useEffect(() => {
  //   const fun = async () => {
  //     const data = await getQuestionService(id)
  //     setQuestionData(data)
  //     setLoading(false)
  //   }
  //   fun()
  // }, [])

  // return { loading, questionData }

  const load = async () => {
    const data = await getQuestionService(id)
    return data
  }

  const { loading, data, error } = useRequest(load)

  return { loading, data, error }
}

export default useLoadQuestionData
