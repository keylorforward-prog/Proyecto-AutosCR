import React from 'react'
import "../../styles/ContenidoPag.css"

export default function ContenidoPag() {
  return (

    <div className="concesionario-contenedor">
      {/* SECCIÓN 1: CABECERA Y CARRUSEL */}
      <section id="inicio" className="hero-oscuro">
        <div className="container">
          <span className="etiqueta-roja">Agencia 2026</span>
          <h1 className="titulo-principal">Tu próximo auto te espera</h1>
          <p className="descripcion-hero">
            Calidad garantizada, financiamiento rápido y el mejor servicio post-venta del país.
          </p>
          
          {/* Carrusel con ID fácil de humano */}
          <div id="carrusel-autos-principales" className="carousel slide shadow-lg rounded" data-bs-ride="carousel">
            <div className="carousel-inner rounded">
              
              <div className="carousel-item active">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&h=500" className="d-block w-100" alt="Auto deportivo" />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                  <h5>Modelos Deportivos</h5>
                  <p>Siente la potencia en cada kilómetro.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&h=500" className="d-block w-100" alt="Camioneta 4x4" />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                  <h5>Aventura Todo Terreno</h5>
                  <p>Diseñadas para los caminos más exigentes.</p>
                </div>
              </div>

            </div>
            
            {/* Botones de navegación usando el ID de arriba */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carrusel-autos-principales" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carrusel-autos-principales" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: HISTORIA / NOSOTROS */}
      <section id="nosotros" className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h2 className="titulo-seccion">Pasión por los motores</h2>
            <p>Desde 2011, hemos ayudado a miles de familias a encontrar el transporte ideal. No solo vendemos autos, entregamos seguridad y confianza.</p>
            <p>Cada vehículo en nuestro inventario pasa por un diagnóstico de 100 puntos clave antes de llegar a tus manos.</p>
          </div>
          <div className="col-lg-5">
            <div className="frase-destacada">
              "En este concesionario, el cliente siempre es el piloto de su propia experiencia."
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: BENEFICIOS (Tarjetas con Hover) */}
      <section id="servicios" className="fondo-gris-claro py-5">
        <div className="container">
          <h2 className="text-center mb-5 titulo-seccion">Nuestros Beneficios</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="tarjeta-auto">
                <h3>📋 Garantía</h3>
                <p>2 años de garantía de fábrica en todos nuestros modelos nuevos.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tarjeta-auto">
                <h3>💰 Crédito</h3>
                <p>Aprobación inmediata con solo presentar tu identificación.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tarjeta-auto">
                <h3>🛠️ Taller</h3>
                <p>Servicio de mantenimiento técnico con repuestos 100% originales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: REQUISITOS (Caja destacada) */}
      <section id="requisitos" className="container py-5 mb-5">
        <div className="caja-requisitos">
          <h2 className="titulo-seccion">¿Qué necesitas para comprar?</h2>
          <ul className="lista-limpia">
            <li><strong>1. Documentos:</strong> Cédula física o pasaporte al día.</li>
            <li><strong>2. Ingresos:</strong> Orden patronal o recibos por servicios profesionales.</li>
            <li><strong>3. Prima:</strong> Contamos con opciones desde 0% de prima (sujeto a crédito).</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
