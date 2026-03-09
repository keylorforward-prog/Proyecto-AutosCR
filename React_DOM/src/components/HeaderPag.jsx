import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderPag.css";

function HeaderPag() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        
        {/* Usamos Link directamente con la clase navbar-brand */}
        <Link 
          to="/AdminLogin" 
          className="navbar-brand fw-bold logo-link"
        >
          CRAutos<span className="text-primary">.</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto gap-2"> 
            <Link className="btn btn-outline-light border-0" to="/">
              Pagina Principal
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderPag;