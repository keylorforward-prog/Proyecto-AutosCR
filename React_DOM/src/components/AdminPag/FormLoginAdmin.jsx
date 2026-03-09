import React, { useState, useEffect } from 'react'
import serviceAdminUsuarios from '../../services/serviceAdminUsuarios' // Importamos el nuevo servicio de admin
import "../../styles/FormRegister.css"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

function FormLoginAdmin() {

    const [usuarios, setUsuarios] = useState([]);
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function cargarUsuarios() {
            // Usamos la función del nuevo servicio para la tabla adminUsuarios
            const dataUsuario = await serviceAdminUsuarios.getAdminUsuarios();
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
                icon: 'success',
                title: `¡Bienvenido Admin, ${usuarioEncontrado.nombreUsuario}!`,
                text: 'Accediendo al panel de administración...',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                // Redirigimos a la página de administración
                navigate('/AdminPag'); 
            });
            setContrasena("");
            setCorreo("");
            
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Acceso Denegado',
                text: 'Credenciales de administrador incorrectas.',
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
                                    Admin Login
                                </h2>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Correo Admin</label>
                                    <input
                                        type="email"
                                        className="form-control custom-input"
                                        placeholder="admin@correo.com"
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
                                    INGRESAR COMO ADMIN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormLoginAdmin
