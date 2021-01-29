// icrease Item
const increaseItemBtn = document.getElementById("increaseItem");
increaseItemBtn.addEventListener("click", function () {
    increasingValue("inputText", "totalPhonePrice");
});
// decreasing Item
const decreaseItemBtn = document.getElementById("decreaseItem");
decreaseItemBtn.addEventListener("click", function () {
    decreasingValue("inputText", "totalPhonePrice");
});
// increase Case
const increaseCaseBtn = document.getElementById("increaseCaseBtn");
increaseCaseBtn.addEventListener("click", function () {
    const inputCaseText = document.getElementById("inputCaseText").value;
    let inputCaseTextNumber = parseFloat(inputCaseText);
    inputCaseTextNumber++;
    document.getElementById("inputCaseText").value = inputCaseTextNumber;

    const totalCasePrice = document.getElementById("totalCasePrice").innerText;
    let totalCasePriceNumber = parseFloat(totalCasePrice)
    document.getElementById("totalCasePrice").innerText = inputCaseTextNumber * 59;
})

// decrease Case
const decreaseCaseBtn = document.getElementById("decreaseCaseBtn");
decreaseCaseBtn.addEventListener("click", function () {
    const inputCaseText = document.getElementById("inputCaseText").value;
    let inputCaseTextNumber = parseFloat(inputCaseText);
    inputCaseTextNumber--;
    document.getElementById("inputCaseText").value = inputCaseTextNumber;

    const totalCasePrice = document.getElementById("totalCasePrice").innerText;
    let totalCasePriceNumber = parseFloat(totalCasePrice)
    document.getElementById("totalCasePrice").innerText = totalCasePriceNumber - 59;

})

// functionality
function increasingValue(input, display) {
    const inputTextValue = document.getElementById(input).value;
    let inputTextValueNumber = parseFloat(inputTextValue);
    inputTextValueNumber++;
    document.getElementById(input).value = inputTextValueNumber;

    const totalPhonePrice = document.getElementById(display).innerText;
    let totalPhonePriceNumber = parseFloat(totalPhonePrice);
    document.getElementById(display).innerText = inputTextValueNumber * 1219;

    // subtotal
    let totalProductAmount = document.getElementById("totalProductAmount").innerText;
    totalProductAmount = parseFloat(totalProductAmount);

    document.getElementById("totalProductAmount").innerText = inputTextValueNumber * 1219;
}
function decreasingValue(input, display) {
    const inputTextValue = document.getElementById(input).value;
    let inputTextValueNumber = parseFloat(inputTextValue);
    inputTextValueNumber--;
    document.getElementById(input).value = inputTextValueNumber;

    const totalPhonePrice = document.getElementById(display).innerText;
    let totalPhonePriceNumber = parseFloat(totalPhonePrice);
    document.getElementById(display).innerText = totalPhonePriceNumber - 1219;
    // subtotal
    let totalProductAmount = document.getElementById("totalProductAmount").innerText;
    totalProductAmount = parseFloat(totalProductAmount);

    document.getElementById("totalProductAmount").innerText = totalProductAmount - 1219;
}
