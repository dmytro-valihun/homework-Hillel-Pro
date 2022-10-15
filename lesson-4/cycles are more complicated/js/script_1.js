// 1
// Вывести числа от 20 до 30 через пробел, используя шаг 0,5 (20 20,5 21 21,5….)

let numsFrom20To30 = '';
for (let i = 20; i <= 30;) {
    numsFrom20To30 += i + ' ';
    i += 0.5;
};
console.log(numsFrom20To30);