// Реализовать рекурсивную функцию которая возводит число в степень.
// Число которое нужно возвести в степень передается как первый аргумент в функцию
// Степень передается как второй аргумент в функцию
// pow(num, degree)


function powFunc(num, degree) {
    // return (degree == 1) ? num : num * powFunc(num, degree - 1); <-- the same like below
    if (degree > 1) {
        return num * powFunc(num, degree - 1)
    }
    return num
};
console.log(powFunc(2, 3));