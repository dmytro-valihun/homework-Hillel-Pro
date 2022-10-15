// 10
// Напечатать полную таблицу умножения от 1 до 10

let resultTable = '';
let someVar;
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        someVar = j * i;
        if ( j < 10 ) {
            resultTable += `${i} * ${j} = ${someVar};  `;
        };
        if (j == 10) {
            resultTable += `${i} * ${j} = ${someVar}.`;
        };
    };
    resultTable += '\n';
};
console.log(resultTable);