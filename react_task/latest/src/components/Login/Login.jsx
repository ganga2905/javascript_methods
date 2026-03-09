import React from 'react'
import { useState } from 'react'

const Login = () => {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        


    }
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" 
                placeholder='Enter Name'
                value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                <input type="password" 
                placeholder='Enter Password'
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                /><br/>
                <button type='submit'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Login