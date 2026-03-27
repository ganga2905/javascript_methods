import React, { useState } from 'react'

const DropDownCity = () => {

    const[country,setCountry]=useState({
      india:["chennai","madurai","ramnad"],
     uk:["a","b","c"],
     arbia:["k","l","m"]

    });

    const[select,setSelect]=useState('')
    const[city,setCity]=useState([])
    const handleChange=(e)=>{
        const data=e.target.value
        setSelect(data);
        setCity(country[data])
        
    }
  return (
    <div>

      <select value={select} onChange={handleChange}>
        <option value="">Select Country</option>

        {
          Object.keys(country).map((e, i) => (
            <option key={i} value={e}>
              {e}
            </option>
          ))
        }
      </select>

      {
        city.length > 0 && (
          <select>
            <option value="">Select City</option>

            {
              city.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))
            }
          </select>
        )}

           {/* /* <select value={select} onChange={handleChange} >
        {
         
            Object.keys(country).map((e)=>(
                // <option>selected city</option>
                <option value="">{e}</option>
            ))
        
        }
            </select>
            {
                city&&
                <select>
                    {
                        Object.values(city).map((e)=>(
                        <option value="">{e}</option>
                        ))
                    }
                </select>
            }
  */ }

    </div>
  )
}

export default DropDownCity