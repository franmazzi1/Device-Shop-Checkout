let couponApplied = false;

// Actualiza la cantidad de ítems en el carrito
function updateItemCount() {
    let itemCount = document.querySelectorAll(".item").length;
    document.getElementById("item-count").innerText = `${itemCount} ITEM${itemCount !== 1 ? 'S' : ''}`;
}

// Actualiza los totales de la compra
function updateTotals() {
    let subtotal = 0;

    document.querySelectorAll(".item-pay h3").forEach(priceElement => {
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        subtotal += price;
    });

    let tax = subtotal * 0.24; // Impuesto del 24%
    let total = subtotal + tax;

    document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("tax").innerText = `$${tax.toFixed(2)}`;
    document.getElementById("total").innerText = `$${total.toFixed(2)}`;
}

// Aplicar cupón de descuento
document.getElementById("applyCoupon").addEventListener("click", function() {
    if (couponApplied) {
        alert("Coupon already applied!");
        return;
    }

    let coupon = document.getElementById("coupon").value.trim();

    if (coupon === "DISCOUNT10") {
        let subtotalElement = document.getElementById("subtotal");
        let subtotal = parseFloat(subtotalElement.innerText.replace("$", ""));
        
        let discount = subtotal * 0.10; // Aplica 10% de descuento
        subtotal -= discount;

        let tax = subtotal * 0.24; 
        let total = subtotal + tax;

        subtotalElement.innerText = `$${subtotal.toFixed(2)}`;
        document.getElementById("tax").innerText = `$${tax.toFixed(2)}`;
        document.getElementById("total").innerText = `$${total.toFixed(2)}`;

        couponApplied = true;
        document.getElementById("applyCoupon").disabled = true;
        document.getElementById("coupon").disabled = true;
    } else {
        alert("Invalid Coupon!");
    }
});

// Eliminar ítems del carrito
document.querySelectorAll(".remove").forEach(button => {
    button.addEventListener("click", function() {
        let item = this.closest(".item"); // Selecciona el elemento padre más cercano con la clase .item
        item.remove();
        updateTotals();
        updateItemCount();
    });
});

// Inicializa los valores
updateItemCount();
updateTotals();
