const display = document.getElementById("display");

function operate(op, a, b) {
    if(op === '+') return a + b;
    if(op === '-') return a - b;
    if(op === '*') return a * b;
    if(op === '/') {
        if(b === 0) return 'Error';
        return a / b;
    };
}

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetTheDisplay = false;


function appendNumber(num) {
    if(display.value === '0' || shouldResetTheDisplay) {
        display.value = num;
        shouldResetTheDisplay = false;
    }
    else {
        display.value += num;
    }
}

function setOperator(op) {
    if (currentOperator !== null) {
        calculate();
    }
    firstNumber = display.value
    currentOperator = op;
    shouldResetTheDisplay = true;
}

function calculate() {
    if(currentOperator === null) return;
    secondNumber = display.value
    let result = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
    display.value = result;
    currentOperator = null;
}

function clearDisplay() {
    display.value = '0';
    firstNumber = '';
    secondNumber = '';
    currentOperator = null;
}