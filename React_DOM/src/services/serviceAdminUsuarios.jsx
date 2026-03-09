// GET ADMIN USUARIOS
async function getAdminUsuarios() {
    try {
        const respuestaServidor = await fetch("http://localhost:3000/adminUsuarios")
        const datosUsuarios = await respuestaServidor.json();
        return datosUsuarios;
    } catch (error) {
        console.error("Error al obtener los usuarios", error);
    }
}

// POST ADMIN USUARIOS
async function postAdminUsuarios(usuario) {
    try {
        const respuesta = await fetch("http://localhost:3000/adminUsuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        })
        return await respuesta.json();
    } catch (error) {
        console.error("Error al guardar", error);
    }
}

// PUT
async function putAdminUsuarios(usuario, id) {
    try {
        const respuesta = await fetch("http://localhost:3000/adminUsuarios/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        })
        return await respuesta.json();
    } catch (error) {
        console.error("Error al actualizar", error);
    }
}

// DELETE
async function deleteAdminUsuarios(id) {
    try {
        const respuesta = await fetch("http://localhost:3000/adminUsuarios/" + id, {
            method: "DELETE",
        })
        return await respuesta.json();
    } catch (error) {
        console.error("Error al eliminar", error);
    }
}

export default { postAdminUsuarios, getAdminUsuarios, putAdminUsuarios, deleteAdminUsuarios }