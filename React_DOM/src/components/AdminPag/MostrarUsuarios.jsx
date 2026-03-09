import React, { useEffect, useState } from 'react'
import servicePersona from '../../services/servicePersona'
import Swal from 'sweetalert2'

export default function MostrarUsuarios() {

  const [usuarios, setUsuarios] = useState([])

  const [nombreUsuario, setNombreUsuario] = useState("")
  const [correoUsuario, setCorreoUsuario] = useState("")
  const [contrasenaUsuario, setContrasenaUsuario] = useState("")
  const [cedulaUsuario, setCedulaUsuario] = useState("")
  const [lugarResidencia, setLugarResidencia] = useState("")

  const [editandoId, setEditandoId] = useState(null)

  useEffect(() => {
    async function cargarUsuarios() {
      const dataUsuario = await servicePersona.getUsuarios();
      setUsuarios(dataUsuario)
    }
    cargarUsuarios()
  }, [])

  async function editar(id) {
    const objUsuario = {
      nombreUsuario: nombreUsuario,
      correoUsuario: correoUsuario,
      contrasenaUsuario: contrasenaUsuario,
      cedulaUsuario: cedulaUsuario,
      lugarResidencia: lugarResidencia
    }

    await servicePersona.putUsuarios(objUsuario, id)
    
    // Alerta de éxito al editar
    Swal.fire({
      title: "¡Editado!",
      text: "El usuario ha sido actualizado.",
      icon: "success",
      timer: 1500,
      showConfirmButton: false
    })

    // Recargar datos y cerrar edición
    const dataActualizada = await servicePersona.getUsuarios()
    setUsuarios(dataActualizada)
    setEditandoId(null)
  }

  async function eliminar(id) {
    // Alerta de confirmación antes de borrar
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await servicePersona.deleteUsuarios(id)
        
        // Recargar datos
        const dataActualizada = await servicePersona.getUsuarios()
        setUsuarios(dataActualizada)

        Swal.fire(
          "¡Eliminado!",
          "El usuario ha sido borrado.",
          "success"
        )
      }
    })
  }

  function nombreEditado(evento) {
    setNombreUsuario(evento.target.value)
  }

  function correoEditado(evento) {
    setCorreoUsuario(evento.target.value)
  }

  function contrasenaEditado(evento) {
    setContrasenaUsuario(evento.target.value)
  }

  function cedulaEditado(evento) {
    setCedulaUsuario(evento.target.value)
  }

  function residenciaEditado(evento) {
    setLugarResidencia(evento.target.value)
  }

  function activarEdicion(usuario) {
    setEditandoId(usuario.id)
    setNombreUsuario(usuario.nombreUsuario)
    setCorreoUsuario(usuario.correoUsuario)
    setContrasenaUsuario(usuario.contrasenaUsuario)
    setCedulaUsuario(usuario.cedulaUsuario)
    setLugarResidencia(usuario.lugarResidencia)
  }

  return (
    <div>
      {usuarios.map((usuario) => (
        <div key={usuario.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }} > {/* Para las rayas*/}
          <p>{usuario.nombreUsuario}</p>
          <p>{usuario.correoUsuario}</p>
          <p>{usuario.contrasenaUsuario}</p>
          <p>{usuario.cedulaUsuario}</p>
          <p>{usuario.lugarResidencia}</p>

          {editandoId === usuario.id ? (
            <>
              <input type="text" value={nombreUsuario} onChange={nombreEditado} />
              <input type="text" value={correoUsuario} onChange={correoEditado} />
              <input type="text" value={contrasenaUsuario} onChange={contrasenaEditado} />
              <input type="text" value={cedulaUsuario} onChange={cedulaEditado} />
              <input type="text" value={lugarResidencia} onChange={residenciaEditado} />

              <button onClick={() => editar(usuario.id)}>Guardar</button>
            </>
          ) : (
            <button onClick={() => activarEdicion(usuario)}>Editar</button>
          )}

          <button onClick={() => eliminar(usuario.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  )
} //Lo malo q no hay validaciones 

