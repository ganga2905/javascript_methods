/*1. Employee Performance Table 
Scenario: Your manager wants a quick 
dashboard showing employee performance. 
● Create a table listing employees with columns: 
ID, Name, Department, Performance 
Score. 
● Highlight rows where score < 50 in red. 
● Render dynamically using an array of objects.*/

import { useState } from "react";

const EmployeeTable=()=>{

    const[user,setUser]=useState([
        {id:1,name:"ganga",department:"software",performance:8},
         {id:2,name:"harish",department:"data",performance:50},
          {id:3,name:"aadhi",department:"devops",performance:45},
           {id:4,name:"gaya",department:"node",performance:68},
    ])

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>department</th>
                        <th>performance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    user.map((e)=>(
                        <tr key ={e.id} 
                        style={{backgroundColor:e.performance<50?"red":"white"}}>
                        <td>{e.id}</td>
                         <td>{e.name}</td>
                         <td>{e.department}</td>
                         <td>{e.performance}</td>
                        </tr>

                    ))
                        
                    
                    }
                </tbody>
            </table>

        </div>
    )
}
export default EmployeeTable;