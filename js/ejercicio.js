document.querySelector("#miFormulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let precio = parseFloat(document.querySelector("#precio").value);
    let cantidad = parseInt(document.querySelector("#cantidad").value);

    let subtotal = 0;

    for (let i = 0; i < 1; i++) {
        subtotal = precio * cantidad;
    }

    let descuento = 0;

    if (subtotal >= 500) {
        descuento = subtotal * 0.10;
    }

    let total = subtotal - descuento;

    document.querySelector("#txtSubtotal").innerText = "Subtotal: S/ " + subtotal;
    document.querySelector("#txtDescuento").innerText = "Descuento: S/ " + descuento;
    document.querySelector("#txtTotal").innerText = "Total Final: S/ " + total;
});