// #6
alert('task #6');
let threeDigitNum = +prompt('Enter the third-digit num', '');
let lastNumOfThreeDigitNum = threeDigitNum % 10;
let secondNumOfThreeDigitNum = (threeDigitNum - lastNumOfThreeDigitNum) % 100 / 10;
let firstNumOfThreeDigitNum = (threeDigitNum - lastNumOfThreeDigitNum - (secondNumOfThreeDigitNum * 10)) / 100;
let isEqualSum = (firstNumOfThreeDigitNum + secondNumOfThreeDigitNum + lastNumOfThreeDigitNum) % 2;
console.log(isEqualSum ? `The sum of numbers is odd` : ` The sum of numbers is even`);
let sumOfNumsEqual_5 = (firstNumOfThreeDigitNum + secondNumOfThreeDigitNum + lastNumOfThreeDigitNum) % 5;
console.log(sumOfNumsEqual_5 ? 'Sum of this numbers is not multiple 5' : 'Sum of this numbers is multiple 5');
let isMultOfNumsMore_100 = (firstNumOfThreeDigitNum * secondNumOfThreeDigitNum * lastNumOfThreeDigitNum);
console.log(isMultOfNumsMore_100 > 100 ? 'The multiple of this numbers more than 100' : 'The multiple of this numbers less than 100');