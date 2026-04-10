import React, { useState } from 'react'

const UserDetails = () => {
    const[user,setUser]=useState({name:"ganga",age:21})

    const handleName=()=>{
        setUser({...user,name:"gang k"})

    }
    const handleAge=()=>{
        setUser({...user,age:22})

    }
  return (
    <div>
        <h1>user information</h1>
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
        <button onClick={handleName}>update name</button>
        <button onClick={handleAge}>update Age</button>

    </div>
  )
}

export default UserDetails