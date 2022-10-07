// #1
alert('task #1');
const numOne = +prompt('Enter the first num', '');
const numTwo = +prompt('Enter the second num', '');
if (numOne > numTwo) {
    console.log(`${numOne} more than ${numTwo}`)
} else if (numTwo > numOne) {
    console.log(`${numOne} less than ${numTwo}`)
} else {
    console.log(`${numOne} is equal ${numTwo}`)
};