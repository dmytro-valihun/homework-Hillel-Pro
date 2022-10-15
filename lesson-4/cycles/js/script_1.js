// 1
// Вывести на страницу в одну строку через запятую числа от 10 до 20

for (let numFrom10to20 = 10; numFrom10to20 <= 20; numFrom10to20++) {
    if (numFrom10to20 < 20) {
        document.write(`${numFrom10to20}, `)
    };
    if (numFrom10to20 == 20) {
        document.write(`${numFrom10to20}. <br>`) // <br> for another result in task 9
    };
};