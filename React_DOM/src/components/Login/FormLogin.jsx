import React, { useState, useEffect } from 'react'
import servicePersona from '../../services/servicePersona'
import "../../styles/FormRegister.css"
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom'

function FormLogin() {

    //Establecemos las variables 
    const [usuarios, setUsuarios] = useState([]);
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const navigate = useNavigate(); // 2. Inicializamos la función navigate

    useEffect(() => {
        async function cargarUsuarios() {
            const dataUsuario = await servicePersona.getUsuarios();
            setUsuarios(dataUsuario);
        }
        cargarUsuarios();
    }, []);

    const validarLogin = () => {
        const usuarioEncontrado = usuarios.find((u) =>
            u.correoUsuario === correo && u.contrasenaUsuario === contrasena
        );

        if (usuarioEncontrado) {
            Swal.fire({
                icon: 'success', //Las comillas 
                title: `¡Bienvenido, ${usuarioEncontrado.nombreUsuario}!`,
                text: 'Has iniciado sesión correctamente..',
                showConfirmButton: false,
                timer: 2000 // Se cierra solo en 2 segundos
            }).then(() => { //Dsp el hace ese then y dirige ahi

            navigate('/UserPag');
        });
            setContrasena("");
            setCorreo("");
            
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error de coincidencia',
                text: 'Correo o contraseña incorrectos.',
            });
        }
    }
    return (
        <div className="formLogin">
            <div className="container py-5">
                <div className="row justify-content-center align-items-center min-vh-100">

                    <div className="col-md-6 col-lg-4">

                        <div className="card login-card border-0 shadow-lg">
                            <div className="card-body p-4">
                                <h2 className="text-center mb-4 titulo-form">
                                    Iniciar Sesión
                                </h2>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        className="form-control custom-input"
                                        placeholder="correo@ejemplo.com"
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Contraseña</label>
                                    <input
                                        type="password"
                                        className="form-control custom-input"
                                        placeholder="••••••••"
                                        value={contrasena}
                                        onChange={(e) => setContrasena(e.target.value)}
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-primary w-100 fw-bold btn-guardar mt-3 py-2"
                                    onClick={validarLogin}
                                >
                                    INGRESAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormLogin
