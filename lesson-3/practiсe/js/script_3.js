// #3
alert('task #3');
const numOneDiv = +prompt('Enter the first num', '');
const numTwoDiv = +prompt('Enter the second num', '');
let isDivisorNumOne;
let isDivisorNumTwo;
let resultOneDivTwo;
let resultTwoDivOne;
if (isNaN(numOneDiv) || isNaN(numTwoDiv)) {
    console.log('Something was wrong, try again')
} else {
    resultOneDivTwo = numOneDiv % numTwoDiv;
    resultTwoDivOne = numTwoDiv % numOneDiv;
    isDivisorNumOne = numOneDiv > numTwoDiv;
    isDivisorNumTwo = numTwoDiv > numOneDiv;
    if (numOneDiv === 0 || numTwoDiv === 0) {
        // console.log(isDivisorNumOne)
        // console.log(isDivisorNumOne)
        if (isDivisorNumOne) {
            console.log(`If you divide ${numOneDiv} by ${numTwoDiv} the result is be infinite\nYou can divide ${numTwoDiv} by ${numOneDiv}, but the result is be 0 `)
        } else if (isDivisorNumTwo) {
            console.log(`If you divide ${numTwoDiv} by ${numOneDiv} the result is be infinite\n\nYou can divide ${numOneDiv} by ${numTwoDiv}, but the result is be 0 `)
        } else {
            console.log('Well, how can I divide 0 by 0 for you?')
        }
    } else if (numOneDiv === numTwoDiv) {
        console.log('The numbers was equal, the result is 1')
    } else {
        if (isDivisorNumOne && numOneDiv % numTwoDiv === 0) {
            console.log(`${numTwoDiv} is the divisor of a number ${numOneDiv}\nthe remainder of the division is 0`)
        } else if (isDivisorNumTwo && numTwoDiv % numOneDiv === 0) {
            console.log(`${numOneDiv} is the divisor of a number ${numTwoDiv}\nthe remainder of the division is 0`)
        } else if (isDivisorNumOne && numOneDiv % numTwoDiv !== 0) {
            console.log(`You can divide ${numOneDiv} by ${numTwoDiv}, but you\'ll have the remainder of the division is ${resultOneDivTwo}`)
        } else if (isDivisorNumTwo && numTwoDiv % numOneDiv !== 0) {
            console.log(`You can divide ${numTwoDiv} by ${numOneDiv}, but you\'ll have the remainder of the division is ${resultTwoDivOne}`)
        }
    }
};