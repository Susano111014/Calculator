let digit1;
let digit2;
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
    if (num1 === 0 || num2 === 0) {
        screen.innerHTML = `<span class='digit-style'>${'XD'}</span>`
        return 'XD'
    }
    const divide = num1 / num2;
    return divide
}

function operate(operation, num1, num2) {
    const result = operation(num1, num2);
    return result
}

function typeOp(op) {
    let type;
    if (op === '+') {
        type = add;
        return type
    } else if (op === "-") {
        type = subtract;
        return type
    } else if (op === "x") {
        return type = multiply;
    } else if (op === '÷') {
        return type = beDivide;
    }
}

function clearCalculator() {
    currentNum = [];
    digit1 = 0;
    operator = undefined;
    digit2 = 0;
    dot = '';
    document.querySelector('.dot').disabled = false;

}

const displayValue = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('.screen');
let currentNum = [];
let dot;

function showMeTheNum() {
    let numInt = 0;
    displayValue.forEach((digits) => {
        digits.addEventListener('click', (e) => {
            if (e.target.textContent === "AC") {
                clearCalculator();
                screen.innerHTML = `<span class='digit-style'>${''}</span>`
                return
            }if(e.target.textContent === "." && !dot) {
                dot = e.target.textContent;
                document.querySelector('.dot').disabled = true;
            }
            currentNum.push(e.target.textContent);
            currentNum.splice(13, );
            numInt = currentNum.join('');
            screen.innerHTML = `<span class='digit-style'>${numInt}</span>`;
        })
    })
}
showMeTheNum();

function clickOperator() {
    operators.forEach(Op => {
        Op.addEventListener('click', (e) => {
            const currentOperator = e.target.textContent;
            if (operator === "=") {
                operator = currentOperator;
                return
            }
            if (!digit1) {
                digit1 = currentNum.join('');
                digit1 = Number(digit1);
                currentNum = [];
                operator = currentOperator;
                dot = "";
                document.querySelector('.dot').disabled = false;
            } else {
                digit2 = currentNum.join('');
                digit2 = Number(digit2);
                const knowOp = typeOp(operator);
                if (knowOp === "XD") { return }
                const longResult = operate(knowOp, digit1, digit2);
                let result = longResult.toString();
                result = result.split('');
                result.splice(13, );
                result = Number(result.join(''));
                screen.innerHTML = `<span class='digit-style'>${result}</span>`;
                digit1 = result;
                digit2 = 0;
                operator = currentOperator;
                currentNum = [];
                dot = "";
                document.querySelector('.dot').disabled = false;
            }
        })
    })
}

clickOperator();