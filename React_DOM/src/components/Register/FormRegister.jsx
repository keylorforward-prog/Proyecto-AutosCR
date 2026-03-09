import React, { useState } from 'react'
import serviceAdminUsuario from '../../services/serviceAdminUsuarios';
import "../../styles/FormRegister.css"
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom'


function FormRegister() {

  const [nombreUsuario, setNombrePersona] = useState("")
  const [correoUsuario, setCorreo] = useState("")
  const [contrasenaUsuario, setContrasenaUsuario] = useState("")
  const [confirmarContrasena, setConfirmarContrasena] = useState("")
  const [cedula, setCedula] = useState("")
  const [lugarResidencia, setlugarResidencia] = useState("")

  const [usuariosExistentes, setUsuariosExistentes] = useState([]) //SE inicia vacio esa lista q viene del endpoint

  //Fecha de nacimiento.para poder validar que un menor no suba nada ?
  //En otro proyecto hacer lo de la edad mjr
  
  const Navigate = useNavigate(); //ESTO 

  async function btnGuardar() {
    //Find no un for
    const usuarioDuplicado = usuariosExistentes.find(u => u.correoUsuario === correoUsuario.trim());

    if (!nombreUsuario.trim() || !correoUsuario.trim() || !contrasenaUsuario.trim()
      || !confirmarContrasena.trim() || !cedula.trim() || !lugarResidencia.trim()) {
      Swal.fire({ //AQUI ESTABAN LOS Alerts Sencillos
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, llena todos los campos obligatorios.',
        confirmButtonColor: '#0d6efd'
      });

    } else if (usuarioDuplicado) {
      Swal.fire({
        icon: 'error',
        title: 'Correo no disponible',
        text: 'Este correo ya está en uso por otra cuenta.',
      });

    } else if (correoUsuario.trim().length < 10) {
      Swal.fire({
        icon: 'error',
        title: 'Correo inválido',
        text: 'El correo debe tener al menos 10 caracteres.',
      });

    } else if (contrasenaUsuario.trim().length < 8) {
      Swal.fire({
        icon: 'info',
        title: 'Contraseña débil',
        text: 'La contraseña debe tener al menos 8 caracteres.',
      });

    } else if (contrasenaUsuario.trim() !== confirmarContrasena.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error de coincidencia',
        text: 'Las contraseñas no son iguales.',
      });

    } else if (cedula.trim().length < 9) {
      Swal.fire({
        icon: 'error',
        title: 'Cédula inválida',
        text: 'La cédula debe tener al menos 9 dígitos.',
      });

    } else {

      const objPersona = {
        nombreUsuario: nombreUsuario,
        correoUsuario: correoUsuario,
        contrasenaUsuario: contrasenaUsuario,
        cedulaUsuario: cedula,
        lugarResidencia: lugarResidencia
      }
      const usuarioAlmacenado = await servicePersona.postUsuarios(objPersona)
      Swal.fire({
        icon: 'success',
        title: '¡Usuario Creado!',
        text: 'El registro se completó con éxito.',
        showConfirmButton: false,
        timer: 2000 // Se cierra solo en 2 segundos
      });

      setNombrePersona("");
      setCorreo("");
      setContrasenaUsuario("");
      setConfirmarContrasena("");
      setCedula("")
      setlugarResidencia("")

      Navigate('/Login');

    }
  }

  return (
    <div className="registro-page">
      <div className="container py-5">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-6 col-lg-4">

            <div className="card registro-card border-0 shadow-lg">
              <div className="card-body p-4">
                <h2 className="text-center mb-4 titulo-form"> Crear Cuenta </h2>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Nombre Completo</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Ej. Juan Pérez"
                    value={nombreUsuario}
                    onChange={(evento) => setNombrePersona(evento.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Correo Electrónico</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="correo@ejemplo.com"
                    value={correoUsuario}
                    onChange={(evento) => setCorreo(evento.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Contraseña</label>
                  <input
                    type="password"
                    className="form-control custom-input"
                    placeholder="••••••••"
                    value={contrasenaUsuario}
                    onChange={(evento) => setContrasenaUsuario(evento.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Confirmar Contraseña</label>
                  <input
                    type="password"
                    className="form-control custom-input"
                    placeholder="••••••••"
                    value={confirmarContrasena}
                    onChange={(evento) => setConfirmarContrasena(evento.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Cedula</label>
                  <input
                    type="number"
                    className="form-control custom-input"
                    placeholder="ejemplo: 604910942"
                    value={cedula}
                    onChange={(evento) => setCedula(evento.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold"> Provincia </label>
                  <select
                    className="form-select custom-input"
                    value={lugarResidencia}
                    onChange={(evento) => setlugarResidencia(evento.target.value)}
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
export default FormRegister