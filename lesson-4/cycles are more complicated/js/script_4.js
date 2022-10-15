// 4
// Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

let integerNum = +prompt('Task 4\n\nEnter the integer number', '');
let quantityNum = 0;
for (let i = 1; i <= integerNum; i++) {
    if (integerNum % i == 0) {
        quantityNum++;
    };
};
console.log((quantityNum > 2 && integerNum !== 2) ? 'It\'s not the simple number' : 'It\'s the simple number'); // 2 / 1 and 2 --> also simple number