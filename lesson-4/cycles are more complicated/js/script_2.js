// 2
// Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов

let oneDollarCost = 27;
let dollarCost = '';
for (let i = 10; i <= 100; i += 10) {
    dollarCost += oneDollarCost * i + ' ';
};
console.log(dollarCost);

// the same, but i use %
// let oneDollarCost1 = 27;
// let dollarCost1 = '';
// for (let i = 10; i <= 100; i++) {
//     if (i % 10 !== 0) continue
//     dollarCost1 += oneDollarCost1 * i + ' ';
// };
// console.log(dollarCost1);