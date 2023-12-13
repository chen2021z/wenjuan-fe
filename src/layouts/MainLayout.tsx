import React from 'react'
import { Outlet } from 'react-router-dom'
const MainLayout:React.FC = ()=> {
  return (
    <>
    <div>MainLayout header</div>
    <div>
      <Outlet></Outlet>
    </div>
    <div>MainLayout footer</div>
    </>
  )
}

export default MainLayout
