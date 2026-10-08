const customerName = "Budi";
const productPrice = 150000;
const quantity = 3;
const discountPercent = 10;

function calculateTotal(price, qty, discount) {
    const subtotal = price * qty;
    const discountAmount = subtotal * (discount / 100);
    const afterDiscount = subtotal - discountAmount;
    
    return { subtotal, discountAmount, afterDiscount };
}

const calculateShipping = (totalAfterDiscount) => {
    return totalAfterDiscount >= 500000 ? 0 : 20000;
};

const totals = calculateTotal(productPrice, quantity, discountPercent);
const shippingCost = calculateShipping(totals.afterDiscount);
const totalPayment = totals.afterDiscount + shippingCost;

console.log(`Customer: ${customerName}
Product Price: Rp${productPrice}
Quantity: ${quantity}
Subtotal: Rp${totals.subtotal}
Discount: Rp${totals.discountAmount}
After Discount: Rp${totals.afterDiscount}
Shipping: Rp${shippingCost}
Total Payment: Rp${totalPayment}`);