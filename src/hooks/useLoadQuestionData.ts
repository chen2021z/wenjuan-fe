import { useEffect, useState } from 'react'
import { getQuestionService } from '../services/question'
import { useParams } from 'react-router-dom'

const useLoadQuestionData = () => {
  const { id = '' } = useParams()
  const [loading, setLoading] = useState(true)
  const [questionData, setQuestionData] = useState({})

  useEffect(() => {
    const fun = async () => {
      const data = await getQuestionService(id)
      setQuestionData(data)
      setLoading(false)
    }
    fun()
  }, [])

  return { loading, questionData }
}

export default useLoadQuestionData
