
const nombre = document.querySelector("#nombre");
const vistaPrevia = document.querySelector("#vistaPrevia");

nombre.addEventListener("input", function () {
    const nombreIngresado = nombre.value;

    if (nombreIngresado.trim() === "") {
        vistaPrevia.textContent = "Tu producto aparecerá aquí...";
    } else {
        vistaPrevia.textContent = "Producto: " + nombreIngresado;
    }
});