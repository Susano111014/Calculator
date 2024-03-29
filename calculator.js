

let digit1 = false;
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
    if (num1 === 0 || num2 === 0) {
        return "XD"
    }else { 
    const increase = num1 * num2;
    return increase
    }
}

function beDivide(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        screen.innerHTML = `<span class='digit-style'>${'XD'}</span>`
        digit1 = false;
        return 'XD'
    }
    const divide = num1 / num2;
    return divide
}

function equal(num1) {
    const result =  num1;
    return result;
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
    }else if(op === "=") {
        return type = equal
       
    }
}

function clearCalculator() {
    currentNum = [];
    digit1 = false;
    operator;
    digit2 = 0;
    globalResult = "";
}

function ifCurrentNumIsLong(num) {
    if (num.length > 9) {
        return true
    } else {
        false
    }
}

function clickStyleButton(e) {
    const text = e.textContent;
    e.addEventListener("mouseup", () => {
        if (text === "AC" || text === "+/-" || text === "%") {
            e.style = "background-color: #a6a6a6;";
            //others
        } else if (e.classList.contains("operator")) {
            e.style = "background-color: #ff8533";
            //operators
        } else {
            e.style = "background-color: #3a3737";
            //digits
        }
    })
}

const displayValue = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('.screen');
const dot = document.querySelector(".dot");
let currentNum = [];
let globalResult = "";
screen.innerHTML = `<span class='digit-style'>${"0"}</span>`;

function showMeTheNum() {
    let numInt = 0;
    displayValue.forEach((digits) => {
        digits.addEventListener("mousedown", (e) => {
            const text = e.target.textContent;
            if (text === "AC" || text === "+/-" || text === "%") {
                e.target.style = "background-color: #fff;";
            } else {
                e.target.style = "background-color: #a6a6a6;";
            }
            clickStyleButton(e.target);
            if (e.target.textContent === "AC") {//delete button
                clearCalculator();
                screen.innerHTML = `<span class='digit-style'>${'0'}</span>`
                return
            } 
            if (currentNum.includes(".")) {
                if (text == ".") {
                    return
                }
            }else if(globalResult.toString().includes(".")){
                    return
            }
            if(globalResult){
                if(operator !== "="){
                    digit1 = globalResult;
                    globalResult = "";
                }else{
                    currentNum = globalResult.toString().split("");//fix  two dots in the same variable 
                    globalResult = "";
                }
            }
            currentNum.push(e.target.textContent);
            currentNum.splice(13,);
            if (ifCurrentNumIsLong(currentNum)) {
                numInt = currentNum.join('');
                screen.innerHTML = `<span style="font-size:60px;">${numInt}</span>`;//mistake//
            } else {
                numInt = currentNum.join('');
                screen.innerHTML = `<span class='digit-style'>${numInt}</span>`;
            }
        })
    })
}
showMeTheNum();

function clickOperator() {
    operators.forEach(Op => {
        Op.addEventListener('mousedown', (e) => {
            const currentOperator = e.target.textContent;
            e.target.style = "background-color: #fff;";
            clickStyleButton(e.target);
            if (operator === "=") {
                operator = currentOperator;//fix it!!!!
            }
            if (digit1 === false) {
                if (!currentNum) {
                    digit1 = 0;
                }
            
                if(globalResult){
                    digit1 = globalResult;
                    globalResult = "";
                    operator = currentOperator;
                    return
                }       
                digit1 = Number(currentNum.join(''));
                currentNum = [];
                operator = currentOperator;                             
            }else {
                digit2 = currentNum.join('');
                digit2 = Number(digit2);
                const knowOp = typeOp(operator);
                const longResult = operate(knowOp, digit1, digit2);
                if (longResult === "XD") { return } //if  an number is divide by 0
                let result = longResult.toString();
                result = result.split('');
                result.splice(13,);
                if (ifCurrentNumIsLong(result)) {
                    result = Number(result.join(''));
                    screen.innerHTML = `<span style="font-size:55px;">${result}</span>`;
                } else {
                    result = Number(result.join(''));
                    screen.innerHTML = `<span class='digit-style'>${result}</span>`;
                }
                digit1 = false;//fix
                digit2;
                globalResult = result;
                operator = currentOperator;
                currentNum = [];
            }
        })
    })
}

clickOperator();

//I had to be deleted everything code about the dot button's logic