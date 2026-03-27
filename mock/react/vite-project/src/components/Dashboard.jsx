import React from 'react'
import Login from './Login'
import AdminDashboard from './AdminDashboard'
import UserDashboard from './UserDashboard'

const Dashboard = ({user}) => {
    if(!user.isLoggedIn){
        return <Login/>
    }
    if(user.role=="admin"){
       return <AdminDashboard name={user.name}/>
    }
    if(user.role==="user"){
      return <UserDashboard name={user.name}/>
    }


  return (
    <div>
        <h2>Dashboard</h2>

    </div>
  )
}

export default Dashboard