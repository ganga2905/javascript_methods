/*4. City Weather Dashboard 
Scenario: Users select a city to view its weather. 
● Dropdown to select a city. 
● Display: Current weather in 
[City] is [Temperature]°C. 
● If temperature > 30°C → show warning: 
Heat Alert! Stay Hydrated. */

import React, { useState } from 'react'

const Weather = () => {
    const[city,setCity]=useState('')
    const[temp,setTemp]=useState(null)

    const weatherData={
        chennai:98,
        madurai:78,
        ramnad:45
    }

    const handleChange=(e)=>{
        const selectedCity=e.target.value;
        setCity(selectedCity);
        setTemp(weatherData[selectedCity])


    }
  return (
    <div>
        <h1>weather Dashboard</h1>
        <select onChange={handleChange}>
            <option value="">selected City</option>
            <option value="chennai">chennai</option>
            <option value="madurai">Madurai</option>
            <option value="ramnad">ramnad</option>
        </select>
        {
            temp!==null&&<p>{`Current weather in 
${city} is ${temp}°C`} </p>
        }
        {
            temp>50&& <p style={{color:"red"}}>heat warning </p>
        }


    </div>
  )
}

export default Weather