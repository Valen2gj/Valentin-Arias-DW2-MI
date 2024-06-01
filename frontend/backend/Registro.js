let baseDeDatos = [];

function registrarUsuario() {
    let nombre = document.getElementById("registro_user").value;
    let email = document.getElementById("registro_email").value;
    let contraseña = document.getElementById("registro_pass").value;
    let confirmacion = document.getElementById("registro_confirmPass").value;

    if (contraseña !== confirmacion) {
        Mensaje("Incompatibilidad en contraseñas", "error");
        return;
    }

    let usuarioExistente = baseDeDatos.find(usuario => usuario.mail === email);
    if (usuarioExistente) {
        Mensaje("El correo electrónico ingresado ya está registrado. Por favor, utilice otro correo electrónico.", "error");
        return;
    }

    let nuevoUsuario = {
        nombre: nombre,
        mail: email,
        contraseña: contraseña
    };

    baseDeDatos.push(nuevoUsuario);
    Mensaje("¡Registrado con éxito!", "success");
}

function iniciarSesion() {
    let email = document.getElementById("inicio_user").value;
    let contraseña = document.getElementById("inicio_pass").value;

    let usuarioEncontrado = baseDeDatos.find(usuario => usuario.mail === email);

    if (usuarioEncontrado) {
        if (usuarioEncontrado.contraseña === contraseña) {
            alert("¡Inicio de sesión exitoso! Bienvenido, " + usuarioEncontrado.nombre);
        } else {
            alert("Contraseña incorrecta. Por favor, inténtelo de nuevo.");
        }
    } else {
        alert("No se encontró ningún usuario con el correo electrónico proporcionado.");
    }
}

function Mensaje(mensaje, tipo) {
    let mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.innerText = mensaje;
    mensajeDiv.className = tipo === "success" ? "mensaje-exito" : "mensaje-error";
    mensajeDiv.style.display = "block";
}
