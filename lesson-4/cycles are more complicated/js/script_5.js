// 5
// Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. 
// (Например, числа 9, 81 можно получить, а 13 - нельзя)

let someNum = +prompt('Task 5\n\nIf you enter a number, then i\'ll determine whether it is possible to get this number if I raise the number 3 to some power. If it works, I will also tell you to what power i raised the number', '');
let powerNum; 
let quantityPower = 0;
if (someNum) {
    if (someNum > 2 && someNum !== 6) {
        for (let i = 1; i > 0; i++) {  //do infinite cycle ;)
            powerNum = 3 ** i;
            if (powerNum > someNum) break;
            quantityPower++;
        };
        console.log((someNum % (3 ** quantityPower) == 0) ? `You get your number ${someNum} if you raise 3 to the ${quantityPower} power` : `You don\'t get your number ${someNum}`);
    } else {
        console.log(`You don\'t get your number ${someNum}`);
    };
};