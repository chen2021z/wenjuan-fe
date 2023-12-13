import React from 'react'
import { Outlet } from 'react-router-dom'
const QuestionLayout:React.FC = ()=> {
  return (
    <>
    <div>
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default QuestionLayout
