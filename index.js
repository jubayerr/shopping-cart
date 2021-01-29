function handleProductValue(product, isIncrease) {
    const productInput = document.getElementById(product + '-input');
    const productInputNumber = parseInt(productInput.value);
    let productNewCount = 0;
    if (isIncrease == true) {
        productNewCount = productInputNumber + 1;
    }
    if (isIncrease == false && productInputNumber > 0) {
        productNewCount = productInputNumber - 1;
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = productTotal;
    calculateTotal()
}

function calculateTotal() {
    phonePrice = document.getElementById('phone-input');
    phoneNewPrice = parseInt(phonePrice.value)
    casePrice = document.getElementById('case-input');
    caseNewPrice = parseInt(casePrice.value)
    totalPrice = phoneNewPrice * 1219 + caseNewPrice * 59
    document.getElementById('total-price').innerText = totalPrice;
    const tax = Math.round(totalPrice * 0.1)
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalPrice + tax;
    return totalPrice;
}
