import React from 'react'

function Contacto() {
  return (
    <section id="area-contacto" className="py-5 fondo-gris-claro">
      <div className="container">
        <div className="row g-4 shadow-sm bg-white rounded-4 overflow-hidden">
          
          {/* INFO DEL CONCESIONARIO */}
          <div className="col-lg-5 p-5 bg-dark text-white d-flex flex-column justify-content-center">
            <span className="etiqueta-roja mb-3" style={{width: 'fit-content'}}>Agencia Central</span>
            <h3 className="mb-4 text-white">Datos de contacto</h3>
            
            <ul className="lista-limpia text-white-50">
              <li className="mb-3"><strong>📍 Dirección:</strong> 200mts Norte del Estadio Nacional, San José.</li>
              <li className="mb-3"><strong>📞 Teléfono:</strong> +506 7104-1281</li>
              <li className="mb-3"><strong>📧 Email:</strong> ventas@tuagencia.com</li>
              <li className="mb-3"><strong>⏰ Horario:</strong> L-V: 8am - 6pm / S: 9am - 2pm</li>
            </ul>
          </div>

          {/* FORMULARIO */}
          <div className="col-lg-7 p-5">
            <h3 className="titulo-seccion">Escríbenos</h3>
            <form id="formulario-humano">
              <div className="mb-3">
                <label className="form-label fw-bold">Nombre</label>
                <input type="text" className="form-control p-3 border-0 bg-light" placeholder="Tu nombre..." />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Mensaje</label>
                <textarea className="form-control p-3 border-0 bg-light" rows="4" placeholder="¿En qué auto estás interesado?"></textarea>
              </div>
              <button className="btn btn-danger w-100 py-3 fw-bold shadow">Enviar Mensaje</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contacto
