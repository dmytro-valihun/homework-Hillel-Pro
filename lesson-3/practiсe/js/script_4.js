// #4
alert('task #4');
const someNumber = +prompt('Enter the number', '');
const resultOfDiv = someNumber % 10;
console.log(resultOfDiv % 2 === 0 ? `${someNumber} is even number, last num is ${resultOfDiv}` : `${someNumber} is odd number, last num is ${resultOfDiv}`);