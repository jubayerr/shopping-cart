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
}