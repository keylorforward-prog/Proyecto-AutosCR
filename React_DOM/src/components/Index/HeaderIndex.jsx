import React from 'react'
import { useNavigate } from 'react-router-dom'; // Importamos el hook
import "../../styles/HeaderPag.css"
import { Link } from "react-router-dom";

function HeaderIndex() {
  return (
   <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          CRAutos<span className="text-primary">.</span>
        </Link>

        {/* Botón Hamburguesa Móvil */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto gap-2"> 
            {/* Usamos Link en lugar de a para evitar recargas */}
            <Link className="btn btn-outline-light border-0" to="/Register">
              Crear Cuenta
            </Link>
            <Link className="btn btn-outline-light border-0" to="/Login">
              Login
            </Link>
            {/* Botón de acción principal resaltado */}
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderIndex
