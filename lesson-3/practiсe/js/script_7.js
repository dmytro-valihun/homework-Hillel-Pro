// #7
alert('task #7');
let someThreeDigitNum = +prompt('Enter the third-digit number', '');
let someLastThreeDigitNum = someThreeDigitNum % 10; 
let someSecondThreeDigitNum = (someThreeDigitNum - someLastThreeDigitNum) % 100 / 10;
let someFirstThreeDigitNum = (someThreeDigitNum - someLastThreeDigitNum - (someSecondThreeDigitNum * 10)) / 100;
let isFirstEqualToSecond = someFirstThreeDigitNum === someSecondThreeDigitNum;
let isSecondEqualToThird = someSecondThreeDigitNum === someLastThreeDigitNum;
let isFirstEqualToThird = someFirstThreeDigitNum === someLastThreeDigitNum;
if (isFirstEqualToSecond && isSecondEqualToThird && isFirstEqualToThird) {
    console.log('All the numbers are the same')
} else {
    console.log('Numbers are not the same')
};
console.log((isFirstEqualToSecond || isSecondEqualToThird || isFirstEqualToThird) ? 'We have the same numbers' : 'No matches');