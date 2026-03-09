import React from 'react'
import FormLoginAdmin from '../components/AdminPag/FormLoginAdmin'
import HeaderPag from '../components/HeaderPag'
import FooterPag from '../components/FooterPag'


function AdminLogin() {
  return (
    <div>
        <HeaderPag/>
        <FormLoginAdmin/>
        <FooterPag/>
    </div>
  )
}

export default AdminLogin
