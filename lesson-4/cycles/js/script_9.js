// 9
// Дано натуральное число. Найти и вывести на страницу все его делители.
// Определить количество его четных делителей
// Найти сумму его четных делителей

let allDividesOfNum;
let quantityEvenDeviders = 0;
let summQuantityEvenDeviders = 0;
let naturalNum = +prompt('Enter the natural nuber', '');
for (let i = 1; i <= naturalNum; i++) {
    if (naturalNum % i == 0) {
        allDividesOfNum = i;  
        if (allDividesOfNum % 2 == 0) {
            quantityEvenDeviders++;
            summQuantityEvenDeviders += allDividesOfNum;
        };
        if (allDividesOfNum < naturalNum) {
            document.write(`${allDividesOfNum}, `);
        };
        if (i == naturalNum) {
            document.write(`${allDividesOfNum}.`)
        };
    };
};
console.log(`Quantity of even deviders is ${quantityEvenDeviders}`);
console.log(`The summ of even deviders is ${summQuantityEvenDeviders}`);