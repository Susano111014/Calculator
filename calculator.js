let digit1;
let digit2;
let operator;

function add (num1, num2) {
    const sum = num1 +  num2;
    return sum
}

function subtract (num1, num2) {
    const remainder = num1 - num2;
    return remainder
}

function multiply (num1, num2) {
    const increase = num1 * num2;
    return increase 
}

function beDivide (num1, num2) {
    const divide = num1 / num2;
    return divide
}

function operate(operation, num1, num2) {
    const result = operation(num1, num2);
    return result
}

const displayValue = document.querySelectorAll('.digit');
const screen = document.querySelector('.screen');
const operators = document.querySelectorAll('.operator');

function DisplayScreen(digit) {
    alert(digit);
}

displayValue.forEach((digits) => {
    digits.addEventListener('click',(e) => DisplayScreen(e.target.textContent))
});