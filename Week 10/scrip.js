function calculate() {
    var a = parseFloat(document.frmCal.txta.value);
    var b = parseFloat(document.frmCal.txtb.value);
    var operator = document.frmCal.slto.value;
    var result;

    if (isNaN(a) || isNaN(b)) {
        showError("Please enter valid numbers.");
        clearResult();
        return;
    }

    if ((operator === "/" || operator === "%") && b === 0) {
        showError("Cannot divide by zero.");
        clearResult();
        return;
    }

    switch (operator) {
        case "+": result = a + b; 
        break;
        case "-": result = a - b; 
        break;
        case "*": result = a * b; 
        break;
        case "/": result = a / b;     
        break;
        case "%": result = a % b; 
        break;
        case "^": result = Math.pow(a, b); 
        break;
        default:
            showError("Invalid operator.");
            clearResult();
            return;
    }

    document.frmCal.txtr.value = result;
    showSuccess("Result: " + result);
}

function showError(message) {
    const resultElement = document.getElementById("result");
    resultElement.innerText = message;
    resultElement.className = "message error";
}

function showSuccess(message) {
    const resultElement = document.getElementById("result");
    resultElement.innerText = message;
    resultElement.className = "message success";
}

function clearResult() {
    document.frmCal.txtr.value = "";
}