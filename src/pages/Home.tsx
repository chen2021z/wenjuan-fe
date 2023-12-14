import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home:React.FC = ()=> {
  const nav = useNavigate()
  function clickHandler(){
    nav('/login')
  }
  return (
    <div>
      Hmoe
      <div>
        <button onClick={clickHandler}>go login</button>
      </div>
    </div>
  )
}

export default Home
