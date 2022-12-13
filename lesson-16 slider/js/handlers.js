btnBack.addEventListener('click', () => {
    clearInterval(interval);
    i -= 2;
    if (i < 0) {
        i = images.length - 1;
    } 
    mainImg.src = images[i];
    i++
    interval = setInterval(showImg, 3000);
});

btnNext.addEventListener('click', () => {
    clearInterval(interval);
    if (i === images.length) {
        i = 0;
    }
    mainImg.src = images[i];
    i++;
    if (i === images.length) {
        i = 0;
    }
    interval = setInterval(showImg, 3000);
});