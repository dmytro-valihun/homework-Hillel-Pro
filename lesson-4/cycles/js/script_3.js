// 3
// Вывести таблицу умножения на 7

let result = '';
let someNums;
for (let i = 1; i <= 10; i++) {
    someNums = i * 7;
    if (i < 10) {
        result += `7 * ${i} = ${someNums}; `;
    };
    if (i == 10) {
        result += `7 * ${i} = ${someNums}.`;
    };
};
console.log(result);