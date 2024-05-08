let Nombre = prompt("Ingrese su nombre"); 
let Mail = prompt("Ingrese su mail");
let Contraseña = prompt("Ingrese su contraseña");
function registro(){
    alert("Se ha registrado exitosamente el usuario " + Nombre)
}
function inicio(){
    let Mail1 = prompt("ingrese el mail")
    let contraseña1 = prompt("ingrese su contraseña")
     while (Mail1 =! Mail){
        alert("Error")
        let Mail1 = prompt("ingrese el mail")
    }
    while (contraseña1 =! Contraseña){
        alert("Error")
        let contraseña1 = prompt("ingrese la contraseña")
    if (Mail1 == Mail && contraseña1 == Contraseña){
        alert("¡Hola " + Nombre + ", bienvenido a nuestro sitio!")
   
}
function Actualizar(){
    let Mail2 = prompt("ingrese el mail")
    let contraseña2 = prompt("ingrese la contraseña")
    while (Mail2 =! Mail){
        alert("Error")
        let Mail2 = prompt("ingrese el mail")
    }
    while (contraseña2 =! Contraseña){
        alert("Error")
        let contraseña2 = prompt("ingrese la contraseña")
    }
    let contraseñanueva = prompt("Ingrese su nueva contraseña")
    Contraseña = contraseñanueva
    alert("la contraseña fue cambiada exitosamente")
}
registro()
inicio()
Actualizar()
