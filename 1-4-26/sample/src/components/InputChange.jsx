import React, { useState } from 'react'

const InputChange = () => {
    const[user,setUser]=useState({name:"ganga",age:21})

    // const handleChangeName=(e)=>{
    //     setUser((old)=>{
    //         return {...old,name:e.target.value}
    //     })

    // }
    // const handleChangeAge=(e)=>{
    //     setUser((old)=>{
    //         return {...old,age:e.target.value}
    //     })
    // }
    const handleChanger=(e)=>{
        setUser({...user,[e.target.name]:[e.target.value]})

    }

  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>

        <input type="text"
         placeholder='enter name' 
         value={user.name} name="name" onChange={handleChanger} />
        <input type="text" 
        placeholder='enter age'
         value={user.age} name="age" onChange={handleChanger}/>

    </div>
  )
}

export default InputChange