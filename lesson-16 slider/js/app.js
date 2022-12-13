const btnBack = document.querySelector('.btn-back');
const btnNext = document.querySelector('.btn-next');
const mainImg = document.querySelector('.main-image');
let i = 0;
showImg();

let interval = setInterval(showImg, 3000);
function showImg() {
    for (; i < images.length;) {
        mainImg.src = images[i];
        i++;
        if (i === images.length) {
            i = 0;
        }
        break;
    } 
};