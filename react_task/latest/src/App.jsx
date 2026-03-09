import { useState } from 'react'

import './App.css'
import AgeForm from './components/AgeForm'
import LoginSignup from './components/LoginSignUp/LoginSignup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Home from './pages/Home'



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginSignup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
