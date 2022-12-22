const btnPeoples = document.querySelector('.btn-peoples');
const btnPlanets = document.querySelector('.btn-planets');
const btnVehicles = document.querySelector('.btn-vehicles');
const divList = document.querySelector('.list');
const divInfo = document.querySelector('.info');
const peoplesUrl = 'https://swapi.dev/api/people/';
const planetsUrl = 'https://swapi.dev/api/planets/';
const vehiclesUrl = 'https://swapi.dev/api/vehicles/';

const mainFunc = function (url, className1, className2) {
    while (divList.firstChild) divList.removeChild(divList.firstChild);
    while (divInfo.firstChild) divInfo.removeChild(divInfo.firstChild);
    let nextUrl = url;
    const arrWithInfo = [];
    function showContent() {
        const btnShowMore = document.querySelector('.showMore');
        if (btnShowMore) {
            btnShowMore.remove();
        }
        fetch(nextUrl)
        .then(function(res) {
            return res.json();
        })
        .then(function(res) {
            for (let i = 0; i < res.results.length; i++) {
                constructor('div', `${res.results[i].name}`, className1, null, divList);
                arrWithInfo.push(res.results[i]);
            }
            nextUrl = res.next;
            if (res.next) {
                constructor('button', 'Show more', 'showMore', showContent, divList);
            }
            divList.addEventListener('click', function(event) {
                while (divInfo.firstChild) divInfo.removeChild(divInfo.firstChild);
                for (let i = 0; i < arrWithInfo.length; i++) {
                    if (event.target.innerText === arrWithInfo[i].name) {
                        for (let key in arrWithInfo[i]) {
                            if (typeof(arrWithInfo[i][key]) !== 'object' && !(arrWithInfo[i][key].startsWith('http'))) {
                                constructor('div', `${key}: ${arrWithInfo[i][key]}`, className2, null, divInfo);
                            }
                        }
                    }
                }
            })
        })
    }
    showContent();
};

btnPeoples.addEventListener('click', mainFunc.bind(null, peoplesUrl, 'people', 'person-info'));
btnPlanets.addEventListener('click', mainFunc.bind(null, planetsUrl, 'planet', 'planet-info'));
btnVehicles.addEventListener('click', mainFunc.bind(null, vehiclesUrl, 'vehicle', 'vehicle-info'));