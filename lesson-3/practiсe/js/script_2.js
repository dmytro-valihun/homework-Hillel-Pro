// #2
alert('task #2');
const firstRage = +prompt('Enter the first rage (km)', '');
const secondRage = +prompt('Enter the second rage (ft)', '');
const footInKm = secondRage * 0.000305 //we converse ft in km
console.log(firstRage > footInKm ? `${firstRage}km more than ${secondRage}ft` : `${secondRage}ft more than ${firstRage}km`);