import './App.scss';
import React, { useState } from 'react';


let firstValue = '';
let currentOperator = '';
let secondValue;
let prevOperator;

function App() {
    const [num, setNum] = useState(0);
    const handleResult = (result) => {
        setNum(result)
    }
    const numbers = ['0', '.', '=', '+', '1', '2', '3', '-', '4', '5', '6', '*', '7', '8', '9', '/', 'C', '√', 'n*', '%'];
    const operations = ['+', '-', '*', '/', 'n*', '%', '√'];

    const doOperations = function(event) {
        const currentTarget = event.target.textContent;
        if (currentTarget === 'C') {
            firstValue = '';
            currentOperator = '';
            secondValue = '';
            handleResult(0)
        } else if (+currentTarget >= 0 && +currentTarget <= 9 || currentTarget === '.') { 
            if (firstValue === '0' && currentTarget === '0') {
                return handleResult(0)
            }   
            if (firstValue === '0' && currentTarget !== '.') {
                firstValue = currentTarget
                return handleResult(firstValue)
            }
            if (firstValue.includes('.') && currentTarget === '.') {
                return handleResult(firstValue)
            }
            firstValue += currentTarget;
            handleResult(firstValue);
            if (firstValue.includes('.') && currentTarget === '.') {
                return handleResult(firstValue)
            }
        }
        for (let i = 0; i < operations.length; i++) {
            if (currentTarget === operations[i]) {
                currentOperator = currentTarget;
                if (currentTarget !== '%' && currentTarget !== '√') {
                    prevOperator = currentTarget; //for percents
                    secondValue = firstValue;
                    firstValue = '';
                }
            }
        }
        if (currentTarget === '=') {
            const finalValue = calculate(currentOperator, +secondValue, +firstValue, prevOperator);
            currentOperator = '';
            secondValue = '';
            if (!isFinite(finalValue)) {
                handleResult('Error')
            } else {
                handleResult(finalValue)
                firstValue = finalValue;
            }
        }
    }

    function calculate(znak, num1, num2, operator) {
        if (znak === '+') {
            return num1 + num2;
        } else if (znak === '-') {
            return num1 - num2;
        } else if (znak === '*') {
            return num1 * num2;
        } else if (znak === '/') {
            return num1 / num2;
        } else if (znak === 'n*') {
            return Math.pow(num1, num2);
        } else if (znak === '%') {
            if (!num1) {
                return num2 /= 100;
            } else {
                let res = num1 / 100;
                res *= num2;
                return calculate(operator, num1, res);
            }
        } else if (znak === '√') {
            if (!num1) {
                return Math.sqrt(num2);
            } else {
                let res = Math.sqrt(num2);
                return calculate(operator, num1, res);
            }
        }
    }

    return (
        <div className="App">
            <div className='Wrap'>
                {numbers.map((item) => (
                    <button key={item} className='Button' onClick={ doOperations }>{item}</button>
                ))}
                <input type="text" className='Input' value={ num } readOnly/>
            </div>
        </div>
    );
}

export default App;