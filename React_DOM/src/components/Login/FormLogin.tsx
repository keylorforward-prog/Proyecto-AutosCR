import { useState, useEffect } from 'react'
import servicePersona from '../../services/servicePersona'
import "../../styles/FormRegister.css"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

// 1. Definimos el requisito: el componente espera recibir un 'titulo'
type Props = {
    titulo: string;
};

// 2. Definimos la plantilla del usuario para que el .find() funcione bien
type Usuario = {
    correoUsuario: string;
    contrasenaUsuario: string;
    nombreUsuario: string;
};

// 3. Pasamos 'props' al componente
function FormLogin(props: Props) {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const navigate = useNavigate();

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
                icon: 'success',
                title: `¡Bienvenido, ${usuarioEncontrado.nombreUsuario}!`,
                text: 'Has iniciado sesión correctamente..',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
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
                                
                                {/* 4. Usamos la prop aquí para mostrar el título dinámico */}
                                <h2 className="text-center mb-4 titulo-form">
                                    {props.titulo}
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

export default FormLogin;