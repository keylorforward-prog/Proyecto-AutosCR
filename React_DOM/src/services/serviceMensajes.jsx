// GET MENSAJES
async function getMensajes() {
    try {
        const respuestaServidor = await fetch("http://localhost:3000/mensajes");
        const datosMensajes = await respuestaServidor.json();
        return datosMensajes;
    } catch (error) {
        console.error("Error al obtener los mensajes", error);
    }
}

// POST MENSAJES
async function postMensajes(mensajeObjeto) {
    try {
        const respuesta = await fetch("http://localhost:3000/mensajes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mensajeObjeto)
        });
        return await respuesta.json();
    } catch (error) {
        console.error("Error al guardar el mensaje", error);
    }
}

// PUT MENSAJES
async function putMensajes(mensajeObjeto, id) {
    try {
        const respuesta = await fetch("http://localhost:3000/mensajes/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mensajeObjeto)
        });
        return await respuesta.json();
    } catch (error) {
        console.error("Error al actualizar el mensaje", error);
    }
}

// DELETE MENSAJES
async function deleteMensajes(id) {
    try {
        const respuesta = await fetch("http://localhost:3000/mensajes/" + id, {
            method: "DELETE",
        });
        return await respuesta.json();
    } catch (error) {
        console.error("Error al eliminar el mensaje", error);
    }
}

export default { postMensajes, getMensajes, putMensajes, deleteMensajes };