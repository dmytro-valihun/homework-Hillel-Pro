let oldTime = [];
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
        if (result[i] !== oldTime[i]) {
            nums[i].children[0].src = `./img/${result[i]}.jpg`;
        }
    }
    oldTime = Object.assign([], result);
};
showCurrentTime();
setInterval(showCurrentTime, 1000);