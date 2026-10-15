const formulario = document.querySelector("#formCliente");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const correo = document.querySelector("#correo").value.trim();

    if (nombre === "" || correo === "") {
        resultado.textContent = "Completa todos los campos"
    } else {
        resultado.textContent = "Cliente registrado: " + nombre + " | Correo: " + correo;
        formulario.reset();
    }

})