import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Admin from '../pages/Admin'
import Index from '../pages/Index'
import UserPag from '../pages/UserPag'
import AdminLogin from '../pages/AdminLogin'
import HeaderIndex from '../components/Index/HeaderIndex'
import HeaderPag from '../components/HeaderPag'


const Routing =()=> {

  return (

    <Router>
      
        <Routes>
            <Route path='/' element={<Index />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Register' element={<Register />}/>
            <Route path='/AdminPag' element={<Admin/>}/>
            <Route path='/AdminLogin' element={<AdminLogin/>} />
            <Route path='/UserPag' element={<UserPag/>} />
        </Routes>
    </Router>

  )
}

export default Routing
