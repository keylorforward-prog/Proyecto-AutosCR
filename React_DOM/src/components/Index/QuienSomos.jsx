//IA 
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos el hook
import Swal from 'sweetalert2';
import "../../styles/SobreNosotros.css"

export default function QuienesSomos() {
    const navigate = useNavigate(); // Inicializamos la función de navegación

    const manejarInteres = () => {
        Swal.fire({
            title: '¡Excelente elección!',
            text: 'Para procesar tu solicitud de auto, por favor inicia sesión o regístrate.',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Ir al Login',
            cancelButtonText: 'Cerrar',
            confirmButtonColor: '#ff4d4d',
        }).then((result) => {
            if (result.isConfirmed) {
                // REDIRECCIÓN CON ROUTING:
                navigate('/login'); 
            }
        }); //ESTA PARTE SI LA SAQUE CON IA (CUIDADO) ese then
    };

    return (
        <section id="seccion-nosotros" className="py-5 bg-white">
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6">
                        <span className="etiqueta-roja mb-3">Nuestra Trayectoria</span>
                        <h2 className="titulo-seccion">Pasión por el movimiento desde 2011</h2>
                        <p className="lead text-secondary">
                            En <strong>ReactApp Motors</strong>, entregamos libertad y seguridad a cada familia.
                        </p>
                        <p>
                            Nacimos para transparentar la compra de vehículos. 
                            Cada auto pasa por un escaneo de 120 puntos.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img 
                            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80" 
                            alt="Agencia" 
                            className="img-fluid rounded-4 shadow-lg"
                        />
                    </div>
                </div>

                <div id="cuadro-interes" className="caja-requisitos text-center mt-5">
                    <h2 className="titulo-seccion">¿Dinos el auto que ocupas?</h2>
                    <p className="mb-4 fs-5 text-muted">
                        Inicia sesión para ver planes de financiamiento personalizados.
                    </p>
                    <button 
                        id="boton-interes"
                        onClick={manejarInteres} 
                        className="btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill shadow-sm"
                    >
                        ¡QUIERO UN AUTO! 🚗
                    </button>
                </div>
            </div>
        </section>
    );
}