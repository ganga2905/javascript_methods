import React, { useState } from 'react'

const Form = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('')

    const [display,setDisplay]=useState(null)

    const handleSubmit=(e)=>{
        e.preventDefault();

        setDisplay(`name: ${name} and email: ${email}`)



    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Enter Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}/><br/>
             <input type="email" 
            placeholder='Enter Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/><br/>
            <button type='submit'>submit</button>
        </form>
        {
            display&&<p>{display}</p>
        }
    </div>
  )
}

export default Form