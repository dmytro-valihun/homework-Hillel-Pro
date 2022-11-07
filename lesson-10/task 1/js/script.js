// Имеется текстовое поле на странице. 
// При фокусировке на этом поле сбоку появляется <div> с информацией. 
// При пропаже фокуса - <div> так же пропадает

const body = document.getElementById('body');
const inputText = document.getElementById('text');

inputText.addEventListener('focus', addDiv);
inputText.addEventListener('blur', delDiv);


function addDiv() {
    const someDiv = document.createElement('div');
    someDiv.className = 'bg-gold';
    someDiv.textContent = 'lorem ipsum...';
    body.appendChild(someDiv);
}
function delDiv() {
    document.querySelector('.bg-gold').remove();
}