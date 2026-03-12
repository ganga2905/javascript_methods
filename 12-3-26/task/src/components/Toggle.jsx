import { useState } from "react"

const Toggle=()=>{

const [data,setData]=useState(true)

const handleClick=()=>{
    setData(!data)
}
    return(

        <div>
            <button onClick={handleClick}>{data?"Login":"Logout"}</button>

        </div>
    )
}
export default Toggle;