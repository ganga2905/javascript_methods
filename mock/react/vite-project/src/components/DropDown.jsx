import React, { useState } from 'react'

const DropDown= () => {

    const[select,setSelect]=useState('')

    // const[display,setDisplay]=useState(null)

    const handleChange=(e)=>{
        setSelect(e.target.value);
        // setDisplay(`you selected ${select}`)

    }

  return (
    <div>
        <select value={select} onChange={handleChange}>
            <option value="">select a student</option>
            <option value="anitha">anitha</option>
            <option value="rahul">rahul</option>
            <option value="deepak">deepak</option>
            <option value="gayathri">gayahtri</option>
        </select>

        {
          select&&<p>{`you selected ${select}`}</p>
        }
    </div>
  )
}

export default DropDown