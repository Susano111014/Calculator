let digit1 = 0;
let digit2 = 0;
let operator;


function add(num1, num2) {
    const sum = num1 + num2;
    return sum
}

function subtract(num1, num2) {
    const remainder = num1 - num2;
    return remainder
}

function multiply(num1, num2) {
    const increase = num1 * num2;
    return increase
}

function beDivide(num1, num2) {
    const divide = num1 / num2;
    return divide
}

function operate(operation, num1, num2) {
    const result = operation(num1, num2);
    return result
}
const displayValue = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('.screen');
let currentNum = '';




// function clickOperator() {
//     operators.forEach(typeOp => {
//         typeOp.addEventListener('click', (e) => {
//             currentOperator = e.target.textContent;
//         })
//     })
// }

// clickOperator();

function showMeTheNum() {
    displayValue.forEach((digits) => {
        digits.addEventListener('click', (e) => {
            currentNum += e.target.textContent;
            numInt = currentNum;
            screen.innerHTML = `<span class='digit-style'>${numInt}</span>`
        })
    })
} 

showMeTheNum();

//The display screen's and showMeTheNum's functions have been merged in one function 