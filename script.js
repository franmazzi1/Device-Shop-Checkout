let couponApplied = false; 
function updateItemCount() {
    let itemCount = document.querySelectorAll(".item").length; 
    document.getElementById("item-count").innerText = `${itemCount} ITEM${itemCount !== 1 ? 'S' : ''}`;
}

function updateTotals() {
    let subtotal = 0;

    
    document.querySelectorAll(".item p").forEach(item => {
        let priceText = item.innerText.match(/\$\d+(\.\d{2})?/); 
        if (priceText) {
            let price = parseFloat(priceText[0].replace("$", ""));
            subtotal += price;
        }
    });

    
    let tax = subtotal * 0.24;
    let total = subtotal + tax;

    
    document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("tax").innerText = `$${tax.toFixed(2)}`;
    document.getElementById("total").innerText = `$${total.toFixed(2)}`;
}


document.getElementById("applyCoupon").addEventListener("click", function() {
    if (couponApplied) {
        alert("Coupon already applied!");
        return;
    }

    let coupon = document.getElementById("coupon").value.trim();

    if (coupon === "DISCOUNT10") {
        let subtotalElement = document.getElementById("subtotal");
        let subtotal = parseFloat(subtotalElement.innerText.replace("$", ""));
        
        let discount = subtotal * 0.10; 
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

document.querySelectorAll(".remove").forEach(button => {
    button.addEventListener("click", function() {
        this.parentElement.remove();
        updateTotals();
        updateItemCount();
    });
});


updateItemCount();
updateTotals();
