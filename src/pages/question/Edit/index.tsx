import React, { useEffect, useState } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

const Edit: React.FC = () => {
  const { loading, questionData } = useLoadQuestionData()

  return <div>edit {loading ? <p>loading</p> : <p>{JSON.stringify(questionData)}</p>}</div>
}

export default Edit
