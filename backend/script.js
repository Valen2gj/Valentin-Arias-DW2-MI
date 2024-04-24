let nombreProducto = "labial";
let precioUnitario = 8750;
let cantidadDeseada = prompt("Ingrese la cantidad deseada");
if (cantidadDeseada >= 5){
    let precioTotal = precioUnitario * cantidadDeseada
    let descuento = precioTotal * 0.10
    let precioDescuento = precioTotal - descuento
    alert("El total es de: $" + precioDescuento)
}
else{
    let precioTotal = precioUnitario * cantidadDeseada;
    alert("El total es de: $" + precioTotal)

}