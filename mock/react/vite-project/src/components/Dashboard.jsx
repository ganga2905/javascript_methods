import React from 'react'
import Login from './Login'

const Dashboard = ({user}) => {
    if(!user.isLoggedIn){
        return <Login/>
    }
    if(user.role=="admin"){
        
    }


  return (
    <div>
        <h2></h2>

    </div>
  )
}

export default Dashboard