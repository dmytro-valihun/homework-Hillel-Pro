// #5 
alert('task #5');
let twoDigitNum = +prompt('Enter the two-digit num', '');
let lastNumOfTwoDigit = twoDigitNum % 10;
let firstNumOfTwoDigit = (twoDigitNum - lastNumOfTwoDigit) / 10;
if (firstNumOfTwoDigit > lastNumOfTwoDigit) {
    console.log(`the first number ${firstNumOfTwoDigit} more than the second number ${lastNumOfTwoDigit}`)
} else if (firstNumOfTwoDigit < lastNumOfTwoDigit) {
    console.log(`the first number ${firstNumOfTwoDigit} less than the second number ${lastNumOfTwoDigit}`)
} else {
    console.log(`the first number ${firstNumOfTwoDigit} is equal the second number ${lastNumOfTwoDigit}`)
};