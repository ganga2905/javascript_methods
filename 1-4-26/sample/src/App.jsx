import React from 'react'
import Function from './components/Function'
import UserDetails from './components/UserDetails'
import InputChange from './components/InputChange'
import Student from './components/Student'

const App = () => {

  const handClick=()=>{
    alert("cliked in win")
  }
  return (
    <div>
          <Function handleClick={handClick}/>
          <UserDetails/>
          <InputChange/>
          <Student name="ganga" age={"22"} isMarried={true}/>
    </div>
  )
}

export default App