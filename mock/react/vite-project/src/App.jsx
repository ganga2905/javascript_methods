import React from 'react'
import Counter from './components/Counter'
import Fetch from './components/Fetch'
import Form from './components/Form'
import EmployeeTable from './components/EmployeeTable'
import ProductForm from './components/ProductForm'
import Todo from './components/Todo'

const App = () => {
  return (
    <div>
      <Counter/>
      <Fetch/>
      <Form/>
      <EmployeeTable/>
      <ProductForm/>
      <Todo/>
    </div>
  )
}

export default App