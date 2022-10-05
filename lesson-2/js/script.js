// #1 Hello user
const userName = prompt('What is your name?', '');
alert(`Hello, ${userName}! How are you?`);

// #2 Math operations
const firstNum = +prompt('Enter the first number', '');
const secondNum = +prompt('Enter the second number', '');
const sumOfNums = firstNum + secondNum;
const diffOfNums = firstNum - secondNum;
const multOfNums = firstNum * secondNum;
const divOfNums = firstNum / secondNum;
alert(`${firstNum} + ${secondNum} = ${sumOfNums}\n${firstNum} - ${secondNum} = ${diffOfNums}\n${firstNum} * ${secondNum} = ${multOfNums}\n${firstNum} / ${secondNum} = ${divOfNums}`);

// #3 Average value
const firstNumber = +prompt('Enter the first number', '');
const secondNumber = +prompt('Enter the second number', '');
const thirdNumber = +prompt('Enter the third number', '');
const arithmeticMean = (firstNumber + secondNumber + thirdNumber) / 3;
alert('The arithmetic mean of these numbers is ' + arithmeticMean); //or alert(`The arithmetic mean of these numbers is ${arithmeticMean}`)