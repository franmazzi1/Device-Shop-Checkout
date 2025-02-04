
let subtotal = 2597.00;
let tax = 623.28;
let total = 3220.28;


document.getElementById("applyCoupon").addEventListener("click", function() {
    let coupon = document.getElementById("coupon").value;

    if (coupon === "DISCOUNT10") { 
        let discount = subtotal * 0.10;
        subtotal -= discount;
        tax = subtotal * 0.24; 
        total = subtotal + tax;

        
        document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
        document.getElementById("tax").innerText = `$${tax.toFixed(2)}`;
        document.getElementById("total").innerText = `$${total.toFixed(2)}`;
    } else {
        alert("Invalid Coupon!");
    }
});


document.querySelectorAll(".remove").forEach(button => {
    button.addEventListener("click", function() {
        this.parentElement.remove();
    });
});
