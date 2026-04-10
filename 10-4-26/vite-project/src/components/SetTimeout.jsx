import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const SetTimeout = () => {

    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

  return (
    <div>
        <h1>SetTimeout</h1>
        {
            loading?<p>loading....</p>:<p>Welcome to our page</p>
        }

        </div>
  )
}

export default SetTimeout