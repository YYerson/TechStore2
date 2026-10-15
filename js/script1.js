//Seleccionamos los elementos
const boton = document.querySelector("#btnMostrar");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", function () {
    mensaje.textContent = "Bienvenidos a mi tienda";
});


