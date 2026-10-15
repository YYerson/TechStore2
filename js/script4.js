const categoria = document.querySelector("#categoria");
const resultado = document.querySelector("#resultado");

categoria.addEventListener("change", function () {
    const categoriaSeleccionada = categoria.value;

    if (categoriaSeleccionada === "") {
        resultado.textContent = "No has seleccionado una categoria";
    } else {
        resultado.textContent = "Categoria seleccionada: " + categoriaSeleccionada;
    }
})