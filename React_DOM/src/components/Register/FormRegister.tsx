import { useState, useEffect } from 'react'
import servicePersona from '../../services/servicePersona'
import "../../styles/FormRegister.css"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

// 1. Definimos qué datos recibe el componente (Props)
type Props = {
  titulo: string;
};

// 2. Definimos la estructura del Usuario para la base de datos
type Usuario = {
  correoUsuario: string;
  nombreUsuario: string;
  contrasenaUsuario: string;
  cedulaUsuario: string;
  lugarResidencia: string;
};

// 3. Pasamos props al componente
function FormRegister(props: Props) {

  const [nombreUsuario, setNombrePersona] = useState("")
  const [correoUsuario, setCorreo] = useState("")
  const [contrasenaUsuario, setContrasenaUsuario] = useState("")
  const [confirmarContrasena, setConfirmarContrasena] = useState("")
  const [cedula, setCedula] = useState("")
  const [lugarResidencia, setlugarResidencia] = useState("")

  const [usuariosExistentes, setUsuariosExistentes] = useState<Usuario[]>([])

  const navigate = useNavigate();

  useEffect(() => {
    async function cargar() {
      const data = await servicePersona.getUsuarios();
      setUsuariosExistentes(data || []);
    }
    cargar();
  }, []);

  async function btnGuardar() {
    const usuarioDuplicado = usuariosExistentes.find(u => u.correoUsuario === correoUsuario.trim());

    if (!nombreUsuario.trim() || !correoUsuario.trim() || !contrasenaUsuario.trim()
      || !confirmarContrasena.trim() || !cedula.trim() || !lugarResidencia.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, llena todos los campos obligatorios.',
        confirmButtonColor: '#0d6efd'
      });

    } else if (usuarioDuplicado) {
      Swal.fire({ icon: 'error', title: 'Correo no disponible', text: 'Este correo ya está en uso.' });
    } else if (correoUsuario.trim().length < 10) {
      Swal.fire({ icon: 'error', title: 'Correo inválido', text: 'Mínimo 10 caracteres.' });
    } else if (contrasenaUsuario.trim().length < 8) {
      Swal.fire({ icon: 'info', title: 'Contraseña débil', text: 'Mínimo 8 caracteres.' });
    } else if (contrasenaUsuario.trim() !== confirmarContrasena.trim()) {
      Swal.fire({ icon: 'error', title: 'Error de coincidencia', text: 'Las contraseñas no son iguales.' });
    } else if (cedula.trim().length < 9) {
      Swal.fire({ icon: 'error', title: 'Cédula inválida', text: 'Mínimo 9 dígitos.' });
    } else {

      const objPersona = {
        nombreUsuario,
        correoUsuario,
        contrasenaUsuario,
        cedulaUsuario: cedula,
        lugarResidencia
      }

      await servicePersona.postUsuarios(objPersona)
      
      Swal.fire({ icon: 'success', title: '¡Usuario Creado!', showConfirmButton: false, timer: 2000 });

      setNombrePersona("");
      setCorreo("");
      setContrasenaUsuario("");
      setConfirmarContrasena("");
      setCedula("")
      setlugarResidencia("")

      navigate('/Login');
    }
  }

  return (
    <div className="registro-page">
      <div className="container py-5">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-6 col-lg-4">
            <div className="card registro-card border-0 shadow-lg">
              <div className="card-body p-4">
                
                {/* 4. Usamos la prop aquí para el título */}
                <h2 className="text-center mb-4 titulo-form"> {props.titulo} </h2>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Nombre Completo</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    value={nombreUsuario}
                    onChange={(e) => setNombrePersona(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Correo Electrónico</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    value={correoUsuario}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Contraseña</label>
                  <input
                    type="password"
                    className="form-control custom-input"
                    value={contrasenaUsuario}
                    onChange={(e) => setContrasenaUsuario(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Confirmar Contraseña</label>
                  <input
                    type="password"
                    className="form-control custom-input"
                    value={confirmarContrasena}
                    onChange={(e) => setConfirmarContrasena(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Cedula</label>
                  <input
                    type="number"
                    className="form-control custom-input"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold"> Provincia </label>
                  <select
                    className="form-select custom-input"
                    value={lugarResidencia}
                    onChange={(e) => setlugarResidencia(e.target.value)}
                  >
                    <option value="" disabled>Selecciona una opción...</option>
                    <option value="San José">San José</option>
                    <option value="Alajuela">Alajuela</option>
                    <option value="Cartago">Cartago</option>
                    <option value="Heredia">Heredia</option>
                    <option value="Guanacaste">Guanacaste</option>
                    <option value="Puntarenas">Puntarenas</option>
                    <option value="Limón">Limón</option>
                  </select>
                </div>

                <button
                  className="btn btn-primary w-100 fw-bold btn-guardar mt-3 py-2"
                  onClick={btnGuardar}
                >
                  REGISTRAR USUARIO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormRegister;