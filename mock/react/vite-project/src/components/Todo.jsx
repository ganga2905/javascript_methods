/*3. Todo App with Priority 
Scenario: You are building a
 todo app for project management. 
● Each todo has: text, priority (High, Medium, Low). 
● Display todos in a list 
sorted by priority.
● Allow marking todos as completed; 
completed todos should be strike-through. */

import React, { useState } from 'react'



const Todo = () => {
  const[text,setText]=useState('');
  const[todos,setTodos]=useState([])
  const handleClick=()=>{
    if(text.trim()=='')
    return
    setTodos([...todos,{text,completed:false}])
    setText('');


  }
  return (
    <div>
      <input type='text'
      value={text}
      onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleClick}>Add</button>
      <ul>
        {
          todos.map((e)=>(
            <li onClick={()=>{e.completed=!e.completed;setTodos([...todos])}} style={{textDecoration:e.completed?"line-through":"none"}}>{e.text}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Todo
