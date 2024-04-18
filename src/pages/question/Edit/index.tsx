import React, { useEffect, useState } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

const Edit: React.FC = () => {
  const { loading, data } = useLoadQuestionData()

  return <div>edit {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}</div>
}

export default Edit
