// 7
// Вывести сумму только четных чисел в диапазоне от 30 до 80

let summEvenNums = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 == 0) {
        summEvenNums += i
    };
};
console.log(summEvenNums);