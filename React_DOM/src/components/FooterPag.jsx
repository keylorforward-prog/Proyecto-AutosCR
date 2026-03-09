import React from "react";
import "../styles/FooterPag.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import auto from "../img/Auto.png";

function FooterPag() {
  return (
    <footer className="custom-footer mt-auto">
      <div className="container">
        <div className="row align-items-center py-4">
          
          {/* LADO IZQUIERDO: LOGO E INFO */}
          <div className="col-md-6 d-flex align-items-center gap-3 mb-3 mb-md-0">
            <img 
              src={auto} 
              alt="Logo" 
              className="footer-logo-img" 
            />
            <div className="brand-info">
              <h5 className="mb-0 fw-bold">CRAutos</h5>
              <small className="text-secondary">Desde 2005 con usted !</small>
            </div>
          </div>

          {/* LADO DERECHO: CONTACTO */}
          <div className="col-md-6 text-md-end contact-info">
            <p className="mb-1">📧 keylillor@gmail.com</p>
            <p className="mb-0">📞 +506 7104-1281</p>
          </div>

        </div>

        {/* LÍNEA FINAL DIVISORA Y COPYRIGHT */}
        <div className="footer-bottom border-top border-secondary pt-3">
          <p className="text-center small mb-0 opacity-50">
            © 2026 MiApp — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default FooterPag;