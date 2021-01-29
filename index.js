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
