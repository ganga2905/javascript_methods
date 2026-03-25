import React from 'react'
import Counter from './components/Counter'
import Fetch from './components/Fetch'
import Form from './components/Form'
import EmployeeTable from './components/EmployeeTable'
import ProductForm from './components/ProductForm'
import Todo from './components/Todo'
import Weather from './components/Weather'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'

const App = () => {

  const user={
    name:"ganga",
    isLoggedIn:true,
    role:"admin"
  }
  return (
    <div>
      <Counter/>
      <Fetch/>
      <Form/>
      <EmployeeTable/>
      <ProductForm/>
      <Todo/>
      <Weather/>
      <Profile/>
      <Dashboard user={user}/>
    </div>
  )
}

export default App