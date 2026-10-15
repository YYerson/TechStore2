const stock = 10;

const boton = document.querySelector("#btnVerificar");
const estado = document.querySelector("#estado");

boton.addEventListener("click", function () {
    if (stock > 0) {
        estado.textContent = "Estado: Producto disponible";
    } else {
        estado.textContent = "Estado: Producto agotado";
    }
});
