import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../utils/auth';
import './Login.css'


const Login = () => {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();

        const storedUser=getUser();
        if(storedUser&&
            storedUser.email===email&&
            storedUser.password===password
        )
        {
           navigate('/home')
        }
        else{
            alert("Invalid Email or Password")
        }

    }
  return (
    <div>
        <div className='box'>
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