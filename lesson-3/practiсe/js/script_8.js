// #8
alert('task #8');
let sixDigitNum = +prompt('Enter the sixth-digit number'); //123321
let sixthNum = sixDigitNum % 10; //1
let fifthNum = (sixDigitNum - sixthNum) % 100000 % 10000 % 1000 % 100 / 10; //2
let forthNum = ((sixDigitNum - sixthNum) - (fifthNum * 10)) % 100000 % 10000 % 1000 / 100; //3     or / 100 % 1000 % 100 % 10  ==> 1233,233,33,3
let thirdNum = ((sixDigitNum - sixthNum) - (fifthNum * 10) - (forthNum * 100)) / 1000 % 100 % 10; //3     or  / 1000 % 100 % 10  ==> 123,23,3
let secondNum = ((sixDigitNum - sixthNum) - (fifthNum * 10) - (forthNum * 100) - (thirdNum * 1000)) / 10000 % 10; //2
let firstNum = ((sixDigitNum - sixthNum) - (fifthNum * 10) - (forthNum * 100) - (thirdNum * 1000) - (secondNum * 10000)) / 100000;  //1
let isSame1And6Num = firstNum === sixthNum;
let isSame2And5Num = secondNum === fifthNum;
let isSame3And4Num = thirdNum === forthNum;
console.log((isSame1And6Num && isSame2And5Num && isSame3And4Num) ? 'This is a mirror number' : 'This is not a mirror number');