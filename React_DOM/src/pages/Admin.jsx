import React from 'react'
import MostrarUsuarios from '../components/AdminPag/MostrarUsuarios'
import HeaderPag from '../components/HeaderPag'
import FooterPag from '../components/FooterPag'


function Admin() {
  return (
    <div>
        <HeaderPag/>
        <MostrarUsuarios/>
        <FooterPag/>
    </div>
  )
}

export default Admin
