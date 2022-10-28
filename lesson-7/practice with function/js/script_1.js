// Написать функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, 
// при втором — суммирует переданный параметр с тем, что передали первый раз и тд. 
// Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28

function getSum() {
    let number = 0;
    return function(num) {
        number += num;
        return console.log(number);
    }
};
const numSum = getSum();
numSum(3);
numSum(5);
numSum(20);