// Create a component that displays a list of users from an array and shows the 
// total number of users.


import React, { useState } from 'react'

const List = () => {

    const[user,setUser]=useState([
        {id:1,name:"ganga",salary:30000},
        {id:2,name:"gaya",salary:60000},
        {id:3,name:"aadhi",salary:40000},
        {id:1,name:"ganga",salary:30000},
        {id:2,name:"gaya",salary:60000},
        {id:3,name:"aadhi",salary:40000}
    ])
  return (
    <div>
      <h1>total: {user.length}</h1>
      <ul>
        {
          user.map((e)=>(
            <li key={e.id}>{e.name}
            </li>
    
            
          ))
        }
      </ul>


    </div>
  )
}

export default List