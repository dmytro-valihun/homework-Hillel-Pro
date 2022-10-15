// 3
// Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N

let integerNumber = +prompt('Task 3\n\nEnter the integer number', '');
let resultSqrNum = '';
let sqrNum = '';
for (let i = 1; i <= 100; i++) {
    sqrNum = i * i;
    if (sqrNum > integerNumber) break;
    resultSqrNum += i + ' ';
};
console.log(resultSqrNum);