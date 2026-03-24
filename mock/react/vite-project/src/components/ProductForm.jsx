/*2. Product Registration Form 
Scenario: Users need to register a new product 
on your e-commerce site. 
● Form fields: Product Name, Category, Price,
 Launch Date. 
● On submit, display: Product [Name] in [Category] 
registered 
successfully! 
● Validate that price > 0 and name is not empty. */

import React, { useState } from 'react'

const ProductForm = () => {
    const[name,setName]=useState('');
    const[price,setPrice]=useState(0)
    const[category,setCategory]=useState('')
    const[date,setDate]=useState('')

    const[display,setDisplay]=useState(null)
    const[error,setError]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(name.trim()==''){
            setError("please required a name")
            return
        }
        if(price<0){
            setError("please enter price")
            return
        }

        setDisplay(`prduct :${name} in ${category} registerd succesfully`)
    }

  return (
    <div>
        <h1>resigter form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)} /><br/>
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="">selsct Category</option>
                <option value='friut'>fruit</option>
                  <option value='veg'>veg</option>
                    <option value='cosmetics'>cosmetis</option>
                       </select><br/>
                    <input type='number '
                     value={price}
                     onChange={(e)=>setPrice(e.target.value)}/><br/>
                     <input type='date' value={date}
                     onChange={(e)=>setDate(e.target.value)}/>
            <button type='submit'>submit</button>
        </form>
        {
            display&&<p>{display}</p>
            
        }
        {error&& <p>{error}</p>}
    </div>
  )
}

export default ProductForm