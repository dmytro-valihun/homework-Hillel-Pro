const numsArr = [
    './img/0.jpg', 
    './img/1.jpg', 
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
];
function showCurrentTime() {
    const date = new Date;
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const timeArr = [hour, min, sec];
    function parseTime(array) {
        const arrWithTimeParse = array.map(function(elem) {
            const rightNum = elem % 10;
            const leftNum = (elem - rightNum) / 10;
            return [leftNum, rightNum];
        })
        return arrWithTimeParse;
    }
    let result = parseTime(timeArr).join().split(',');
    result = result.map(function(elem){
        return +elem;
    })
    const nums = document.querySelectorAll('.time');
    for (let i = 0; i < nums.length; i++) {
        nums[i].children[0].src = `./img/${result[i]}.jpg`;
    }
};
showCurrentTime();
setInterval(showCurrentTime, 1000);