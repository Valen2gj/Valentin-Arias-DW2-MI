let baseDeDatos = [];

function registrarUsuario() {
    let nombre = prompt("Ingrese su nombre");
    let email = prompt("Ingrese su mail");
    let contraseña = prompt("Ingrese su contraseña");
    let confirmacion = prompt("Reingrese su contraseña");
    if (contraseña =! confirmacion){
        alert("Incompatibilidad en contraseñas")
    }
    let usuarioExistente = baseDeDatos.find(usuario => usuario.mail === email);
    if (usuarioExistente) {
        alert("El correo electrónico ingresado ya está registrado. Por favor, utilice otro correo electrónico.");
        return; 
    }

    let nuevoUsuario = {
        nombre: nombre,
        mail: email,
        contraseña: contraseña
    };

    baseDeDatos.push(nuevoUsuario);
    alert("¡Registrado!");
}

function iniciarSesion() {
    let email = prompt("Ingrese su correo electrónico");
    let contraseña = prompt("Ingrese su contraseña");

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
