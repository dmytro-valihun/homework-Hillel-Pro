// Написать функцию заполнения пользовательскими данными двумерного массива. 
// Длину основного массива и внутренних массивов задаёт пользователь. 
// Значения всех элементов всех массивов задаёт пользователь.


let howArraysInArray = +prompt('enter the quantity of array you want', ''); 
let mainArray = [];
function quantMainArray() {
    for (let i = 0; i < howArraysInArray; i++) {
        mainArray[i] = [];
        let littleArray = +prompt('how many values in array you want?', ''); 
        let arr = [];
        for (let j = 0; j < littleArray; j++) {
            let value = prompt('enter values');
            mainArray[i][j] = value;
        }
    }
    return console.log(mainArray);
};
quantMainArray();