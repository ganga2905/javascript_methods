import React from 'react'
import './LoginSignup.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { saveUser } from '../../utils/auth';


const LoginSignup = () => {

  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confirmPassword,setConfirmPassword]=useState('');

  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()

    saveUser(email,password)
    console.log(name,email);
    navigate('/login')
  }



  return (
    <div className='container'>
      <div className='sign'>
        <div className='head'>
          <h3>SignUp</h3>
        </div>
        <form className='form' onSubmit={handleSubmit}>
          <input type="text"
          placeholder='Enter Name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          /><br/>
          <input type='email' 
          placeholder='Enter Email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/><br/>
          <input type='password' 
          placeholder='Enter Password'
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}/><br/>
          <input type='password' 
          placeholder='Enter Confirm Password'
          value={confirmPassword} 
          onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>
          <div className='btn'>
               <button type='submit'>
            SignUp
          </button>
          <button type='submit' onClick={navigate('/login')}>
            Login
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginSignup