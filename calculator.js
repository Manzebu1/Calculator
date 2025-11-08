const display = document.getElementById("display");
console.log(display.value);

function operate(op, a, b) {
    if(op == '+') return a + b;
    if(op == '-') return a - b;
    if(op == '*') return a * b;
    if(op == '/') return a / b;
}

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldClearTheDisplay = false;


function appendNumber(num) {
    // if()
    display.value = num;
}

function setOperator(op) {
    firstNumber = display.value
    currentOperator = op;
    // shouldClearTheDisplay = true;
}

function calculate() {
    secondNumber = display.value
    let result = operate(currentOperator, firstNumber, secondNumber);
    display.value = result;
}

function clearAll() {
    display.value = 0;
    currentOperator = null;
}