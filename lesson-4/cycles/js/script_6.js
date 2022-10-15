// 6
// Найти среднее арифметическое всех целых чисел от 1 до 500

let accumNum = 0;
for (let multAverageNum = 1; multAverageNum <= 500; multAverageNum++) {
    accumNum += multAverageNum
};
let resultAverageNum = accumNum / 500;
console.log(resultAverageNum);