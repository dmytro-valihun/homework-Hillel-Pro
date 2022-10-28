// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. 
// В переменной znak может быть: +, -, *, /, %, ^ (степень). 
// Вывести результат математического действия, указанного в переменной znak. 
// Оба числа и знак получаются от пользователя.


let varX;
let varY;
let operation;

function getX() {
    do {
        varX = +prompt('Enter the first number', '');
    } while (isNaN(varX));
    return varX;
};
function getOperation() {
    do {
        operation = prompt('Enter the operation like: +, -, *, /, %, ^', '');
    } while (!(operation === '+' || operation === '-' || operation === '*' || operation === '/' || operation === '%' || operation === '^'));
    return operation
};
function getY() {
    do {
        varY = +prompt('Enter the second number', '');
    } while (isNaN(varX));
    return varY;
};
function doMath(x, znak, y) {
    let result;
    x = getX();
    znak = getOperation();
    y = getY();
    if (znak == '+') {
        result = x + y;
    } else if (znak == '-') {
        result = x - y;
    } else if (znak == '*') {
        result = x * y;
    } else if (znak == '/') {
        result = x / y;
    } else if (znak == '%') {
        result = x % y;
    } else if (znak == '^') {
        result = x ** y;
    }
    console.log(result);
};
doMath();