let number1 = 10;
let number2 = 5;
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

let sum = add(number1, number2);
let subtraction = subtract(number1, number2);
let increase = multiply(number1, number2);
let divide = beDivide(number1,number2);
console.log(divide);
