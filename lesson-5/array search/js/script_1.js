// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Найти сумму и количество положительных элементов.
// Найти минимальный элемент массива и его порядковый номер.
// Найти максимальный элемент массива и его порядковый номер.
// Определить количество отрицательных элементов.
// Найти количество нечетных положительных элементов.
// Найти количество четных положительных элементов.
// Найти сумму четных положительных элементов.
// Найти сумму нечетных положительных элементов.
// Найти произведение положительных элементов.
// Найти наибольший среди элементов массива, остальные обнулить.

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumPositiveNums = 0;
let quantityPositiveNums = 0;
let minNum = Infinity;
let minNumSequenceNum = 0;
let maxNum = -Infinity;
let maxNumSequenceNum = 0;
let quantityNegativeNums = 0;
let quantityOddPositiveNumbers = 0;
let quantityEvenPositiveNumbers = 0;
let sumEvenPositiveNumbers = 0;
let sumOddPositiveNumbers = 0;
let multPositiveNums = 1;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) { // Найти сумму и количество положительных элементов.
        sumPositiveNums += array[i];
        quantityPositiveNums++;
    }
    if (array[i] < minNum) { // Найти минимальный элемент массива и его порядковый номер.
        minNum = array[i];
        minNumSequenceNum = i;
    }
    if (array[i] > maxNum) { // Найти максимальный элемент массива и его порядковый номер.
        for (let j = 0; j < array.length; j++) { //прогон всего массива и сразу знаем макс число и можем работать с обнулением.
            if (array[j] > maxNum) {
                maxNum = array[j];
                maxNumSequenceNum = j;
            }
        }
    }
    if (array[i] < 0) { 
        quantityNegativeNums++; // Определить количество отрицательных элементов.
    }
    if (array[i] > 0 && array[i] % 2 != 0) { 
        quantityOddPositiveNumbers++; // Найти количество нечетных положительных элементов.
        sumOddPositiveNumbers += array[i]; // Найти сумму нечетных положительных элементов.
    }
    if (array[i] > 0 && array[i] % 2 == 0) { 
        quantityEvenPositiveNumbers++; // Найти количество четных положительных элементов.
        sumEvenPositiveNumbers += array[i]; // Найти сумму четных положительных элементов.
    }
    if (array[i] > 0) {
        multPositiveNums *= array[i]; // Найти произведение положительных элементов.
    }
    if (maxNum > array[i]) {
        array[i] = 0; // Обнуляем лишнее.
    }
};

console.log(`The summ of positive elements is ${sumPositiveNums}, the quantity of positive elements is ${quantityPositiveNums}.
The min element in Array is ${minNum}, it's sequence number is ${minNumSequenceNum}.
The max element in Array is ${maxNum}, it's sequence number is ${maxNumSequenceNum}.
The quantity of negative numbers is ${quantityNegativeNums}.
The quantity of odd numbers more than 0 is ${quantityOddPositiveNumbers}.
The quantity of even numbers more than 0 is ${quantityEvenPositiveNumbers}.
The summ of even numbers more than 0 is ${sumEvenPositiveNumbers}.
The summ of odd numbers more than 0 is ${sumOddPositiveNumbers}.
The multiple of numbers more than 0 is ${multPositiveNums}.
${array}`);