import React, { useEffect, useState } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

const Edit: React.FC = () => {
  const { loading } = useLoadQuestionData()

  return <div> stat {loading ? <p>loading</p> : <p></p>}</div>
}

export default Edit
