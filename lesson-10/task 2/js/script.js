// На странице есть две кнопки. При клике на первую кнопку просим пользователя ввести в prompt ссылку, 
// при клике на вторую - переадресовывается на другой сайт (по ранее введенной ссылке). 
// Реализовать проверку на http / https. Если протокол не указан - добавляем

let site;
const body = document.getElementById('body');
const firstBtn = document.getElementById('first-btn');
const secondBtn = document.getElementById('second-btn');

firstBtn.addEventListener('click', getSite);
secondBtn.addEventListener('click', goToSite);

function getSite() {
    do {
        site = prompt('enter the site', '');
    } while (isFinite(site) || site == null || site == '');
    if (!(site.includes('http://') || site.includes('https://'))) {
        site = 'https://' + site;
    }
    return site;
}
function goToSite() {
    secondBtn.onclick(document.location = site);
}