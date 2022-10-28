// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 
// 'func("hello world", ['l', 'd'])' вернет нам "heo wor". 
// Исходную строку и символы для удаления задаёт пользователь


let string;
let symb;
const deletedSymb = [];
// get string from user
function getStrFromUser() {
    string = prompt('give me a string');
};
// get symbol to delete
function getSymbol() {
    symb = prompt('give me symb for delete');
    return symb;
};
// add deleted symbols to array
function addSymbToArray() {
    do {  
        getSymbol();
        if (symb !== '') {
            deletedSymb.push(symb);
        }
    } while (symb);
    return deletedSymb;
};
// delete symbols and return string
function deleteStr(str, arr) {
    const newArr = [];
    str = str.split(''); 
    for (let i = 0; i < str.length; i++) {
        if (arr.indexOf(str[i]) === -1) {
            newArr.push(str[i]);
        }
    }
    let finalStr = newArr.join('');
    console.log(finalStr);
};

getStrFromUser();
addSymbToArray();
// delete null from array
deletedSymb.pop();
deleteStr(string, deletedSymb);