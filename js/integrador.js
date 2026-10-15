const formulario = document.querySelector("#formReserva");
const resultado = document.querySelector("#resultado");

function obtenerPrecio(curso) {
    if (curso === "excel") {
        return 120;
    } else if (curso === "proyectos") {
        return 200;
    } else if (curso === "datos") {
        return 250;
    } else {
        return 0
    }
}

function calcularDescuento(subtotal, cantidad) {
    if (cantidad >= 5) {
        return subtotal * 0.10;
    } else {
        return 0;
    }
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const correo = document.querySelector("#correo").value.trim();
    const curso = document.querySelector("#curso").value;

    const cantidad = Number(document.querySelector("#cantidad").value);

    if (nombre === "" || correo === "" || curso === "" || !Number.isInteger(cantidad) || cantidad < 1) {
        resultado.textContent = "Verifica los datos e ingresa una cantidad entera mayor a 0";
        resultado.className = "error";
        return;
    }

    const precio = obtenerPrecio(curso);
    const subtotal = precio * cantidad;
    const descuento = calcularDescuento(subtotal, cantidad);
    const total = subtotal - descuento;

    let nombreCurso = "";
    if (curso == "excel") {
        nombreCurso = "Excel para negocios";
    } else if (curso == "proyectos") {
        nombreCurso = "gestion de proyectos";

    } else {
        nombreCurso = "Analisis de datos";
    }

    const resumen = document.createElement("div");

    resumen.classList.add("resumen");

    const lineaNombre = document.createElement("p");
    lineaNombre.textContent = "Participante: " + nombre;

    const lineaCorreo = document.createElement("p");
    lineaCorreo.textContent = "Correo: " + correo;

    const lineaCurso = document.createElement("p");
    lineaCurso.textContent = "Nombre de curso: " + nombreCurso;

    const lineaCantidad = document.createElement("p");
    lineaCantidad.textContent = "Cantidad: " + cantidad;

    const lineaPrecio = document.createElement("p");
    lineaPrecio.textContent = "Precio por participante: " + precio.toFixed(2);

    const lineaSubtotal = document.createElement("p");
    lineaSubtotal.textContent = "Subtotal: " + subtotal.toFixed(2);

    const lineaDescuento = document.createElement("p");
    lineaDescuento.textContent = "Subtotal: " + descuento.toFixed(2);


    const lineaTotal = document.createElement("p");
    lineaTotal.textContent = "Total: " + total.toFixed(2);

    lineaTotal.classList.add("total");

    resumen.appendChild(lineaNombre);
    resumen.appendChild(lineaCorreo);
    resumen.appendChild(lineaCurso);
    resumen.appendChild(lineaCantidad);
    resumen.appendChild(lineaPrecio);
    resumen.appendChild(lineaSubtotal);
    resumen.appendChild(lineaDescuento);
    resumen.appendChild(lineaTotal);

    resultado.textContent = "";
    resultado.className = "";
    resultado.appendChild(resumen);

    formulario.reset();
});