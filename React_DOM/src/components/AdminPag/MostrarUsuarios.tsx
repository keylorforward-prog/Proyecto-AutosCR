import { useEffect, useState } from 'react'
import servicePersona from '../../services/servicePersona'
import Swal from 'sweetalert2'

// 1. Definimos el requisito: el componente espera recibir un 'tituloLista'
type Props = {
  tituloLista: string;
};

// 2. Definimos la estructura del usuario
interface Usuario {
  id: string | number;
  nombreUsuario: string;
  correoUsuario: string;
  contrasenaUsuario: string;
  cedulaUsuario: string;
  lugarResidencia: string;
}

// 3. Pasamos props al componente
export default function MostrarUsuarios(props: Props) {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  const [nombreUsuario, setNombreUsuario] = useState("")
  const [correoUsuario, setCorreoUsuario] = useState("")
  const [contrasenaUsuario, setContrasenaUsuario] = useState("")
  const [cedulaUsuario, setCedulaUsuario] = useState("")
  const [lugarResidencia, setLugarResidencia] = useState("")

  const [editandoId, setEditandoId] = useState<any>(null)

  useEffect(() => {
    async function cargarUsuarios() {
      const dataUsuario = await servicePersona.getUsuarios();
      setUsuarios(dataUsuario || [])
    }
    cargarUsuarios()
  }, [])

  async function editar(id: any) {
    const objUsuario = {
      nombreUsuario,
      correoUsuario,
      contrasenaUsuario,
      cedulaUsuario,
      lugarResidencia
    }

    await servicePersona.putUsuarios(objUsuario, id)
    
    Swal.fire({
      title: "¡Editado!",
      text: "El usuario ha sido actualizado.",
      icon: "success",
      timer: 1500,
      showConfirmButton: false
    })

    const dataActualizada = await servicePersona.getUsuarios()
    setUsuarios(dataActualizada)
    setEditandoId(null)
  }

  async function eliminar(id: any) {
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
        const dataActualizada = await servicePersona.getUsuarios()
        setUsuarios(dataActualizada)
        Swal.fire("¡Eliminado!", "El usuario ha sido borrado.", "success")
      }
    })
  }

  function activarEdicion(usuario: any) {
    setEditandoId(usuario.id)
    setNombreUsuario(usuario.nombreUsuario)
    setCorreoUsuario(usuario.correoUsuario)
    setContrasenaUsuario(usuario.contrasenaUsuario)
    setCedulaUsuario(usuario.cedulaUsuario)
    setLugarResidencia(usuario.lugarResidencia)
  }

  return (
    <div>
      {/* 4. Usamos la prop para el título de la lista */}
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{props.tituloLista}</h2>

      {usuarios.map((usuario) => (
        <div key={usuario.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }} >
          <p><strong>Nombre:</strong> {usuario.nombreUsuario}</p>
          <p><strong>Correo:</strong> {usuario.correoUsuario}</p>
          <p><strong>Cédula:</strong> {usuario.cedulaUsuario}</p>
          <p><strong>Residencia:</strong> {usuario.lugarResidencia}</p>

          {editandoId === usuario.id ? (
            <div style={{ marginTop: '10px' }}>
              <input type="text" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} />
              <input type="text" value={correoUsuario} onChange={(e) => setCorreoUsuario(e.target.value)} />
              <input type="text" value={contrasenaUsuario} onChange={(e) => setContrasenaUsuario(e.target.value)} />
              <input type="text" value={cedulaUsuario} onChange={(e) => setCedulaUsuario(e.target.value)} />
              <input type="text" value={lugarResidencia} onChange={(e) => setLugarResidencia(e.target.value)} />

              <button onClick={() => editar(usuario.id)}>Guardar</button>
              <button onClick={() => setEditandoId(null)}>Cancelar</button>
            </div>
          ) : (
            <button onClick={() => activarEdicion(usuario)}>Editar</button>
          )}

          <button onClick={() => eliminar(usuario.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  )
}