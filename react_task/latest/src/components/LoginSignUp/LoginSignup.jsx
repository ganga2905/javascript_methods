import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='container'>
      <div className='sign'>
        <div className='head'>
          <h3>SignUp</h3>
        </div>
        <form className='form'>
          <input type="text"
          placeholder='Enter Name'/><br/>
          <input type='email' 
          placeholder='Enter Email'/><br/>
          <input type='password' 
          placeholder='Enter Password'/><br/>
          <div className='btn'>
                  <button type='submit'>
            SignUp
          </button>
          <button type='submit'>
            Login
          </button>

          </div>
        </form>

      </div>

    </div>
  )
}

export default LoginSignup