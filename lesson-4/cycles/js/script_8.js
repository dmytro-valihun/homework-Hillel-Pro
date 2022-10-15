// 8
// Вывести все числа в диапазоне от 100 до 200 кратные 3

// for (let i = 100; i <= 200; i++) {
//     if (i % 3 == 0) {
//         console.log(i)
//     }
// };


// it looks better imho:
let resultFrom100to200 = '';
for (let i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
        resultFrom100to200 += i + ' ';
    }
};
console.log(resultFrom100to200);