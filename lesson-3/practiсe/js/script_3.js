// #3
alert('task #3');
const numOneDiv = +prompt('Enter the first num', '');
const numTwoDiv = +prompt('Enter the second num', '');
if (isNaN(numOneDiv) || isNaN(numTwoDiv)) {
    console.log('Something was wrong, try again')
} else {
    if (numOneDiv === numTwoDiv) {
        console.log('The numbers was equal')
    };
    const isDivisorNumOne = numOneDiv > numTwoDiv;
    const isDivisorNumTwo = numTwoDiv > numOneDiv;
    if (isDivisorNumOne) {
        console.log(`${numTwoDiv} is the divisor of a number ${numOneDiv}\n${numOneDiv} is not the divisor of a number ${numTwoDiv}`)
    };
    if (isDivisorNumTwo) {
        console.log(`${numOneDiv} is the divisor of a number ${numTwoDiv}\n${numTwoDiv} is not the divisor of a number ${numOneDiv}`)
    };
};