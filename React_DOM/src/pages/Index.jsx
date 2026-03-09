import React from 'react'
import FooterPag from '../components/FooterPag'
import HeaderIndex from '../components/Index/HeaderIndex'
import ContenidoPag from '../components/UserPag/ContenidoPag'
import QuienesSomos from '../components/Index/QuienSomos'

export default function Index() {
  return (
    <div>  
        <HeaderIndex/>
        <ContenidoPag/>
        <QuienesSomos/>
        <FooterPag/>
    </div>
  )
}
