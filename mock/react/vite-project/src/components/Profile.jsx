// import React, { useState } from 'react'

// const Profile = () => {

//   const [user, setUser] = useState({
//     name: "Ganga",
//     email: "ganga@gmail.com",
//     role: "Frontend Developer",
//     image: "https://via.placeholder.com/150"
//   })

//   const [edit, setEdit] = useState(false)

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Profile Page</h1>

//       <img src={user.image} alt="profile" />

//       {
//         edit ? (
//           <div>
//             <input
//               value={user.name}
//               onChange={(e) =>
//                 setUser({ ...user, name: e.target.value })
//               }
//             /><br /><br />

//             <input
//               value={user.email}
//               onChange={(e) =>
//                 setUser({ ...user, email: e.target.value })
//               }
//             /><br /><br />

//             <input
//               value={user.role}
//               onChange={(e) =>
//                 setUser({ ...user, role: e.target.value })
//               }
//             /><br /><br />

//             <button onClick={() => setEdit(false)}>Save</button>
//           </div>
//         ) : (
//           <div>
//             <h2>{user.name}</h2>
//             <p>{user.email}</p>
//             <p>{user.role}</p>

//             <button onClick={() => setEdit(true)}>Edit</button>
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default Profile


import React, { useState } from 'react'

const Profile = () => {
    const[user,setUser]=useState({
        name:"ganga",
        email:"gayathriganga@gmail.com",
        role:"software Developer"
    })
  return (
    <div>
        <h1>profile</h1>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.role}</p>
    </div>
  )
}

export default Profile