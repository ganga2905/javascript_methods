import { useState } from "react";

const AgeForm=()=>{
    const[age,setAge]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(age<=13){
           alert('child')
        }
        else if(age>=13&& age<=19){
             alert('teenager')
        }
        else if(age>=20){
             alert("adult")
        }
        else{
            alert("not")
        }

         setAge('')


    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
              <input type="number" 
            value={age} 
            onChange={(e)=>setAge(e.target.value)}/>
            <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default AgeForm;