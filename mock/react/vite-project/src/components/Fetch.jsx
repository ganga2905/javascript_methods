// 3. Create a component that fetches data
//  from an API using useEffect and displays 
// it. 

import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(datas=>setData(datas))
        .catch(err=>console.log(err.message)
        )
    },[])
  return (
    <div>
        <ul>
            {
                data.map((e)=>(
                    <li key={e.id}>{e.title}</li>
                ))
            }
        </ul>

    </div>
  )
}

export default Fetch