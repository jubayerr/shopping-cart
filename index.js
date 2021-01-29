function inputValue(isIncrease) {
    const inputCase = document.getElementById('input-case');
    const inputCaseNumber = parseInt(inputCase.value);
    let caseNewCount = 0;
    if (isIncrease == true) {
        caseNewCount = inputCaseNumber + 1;
    }
    if (isIncrease == false && inputCaseNumber > 0) {
        caseNewCount = inputCaseNumber - 1;
    }
    inputCase.value = caseNewCount;
    const caseTotal = caseNewCount * 59
    document.getElementById('total-case').innerText = caseTotal;
}

function handlePhoneValue(isIncrease) {
    const inputPhone = document.getElementById('input-phone');
    const inputPhoneNumber = parseInt(inputPhone.value);
    let phoneNewCount = 0;
    if (isIncrease == true) {
        phoneNewCount = inputPhoneNumber + 1;
    }
    if (isIncrease == false && inputPhoneNumber > 0) {
        phoneNewCount = inputPhoneNumber - 1;
    }
    inputPhone.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('total-phone').innerText = phoneTotal;
}