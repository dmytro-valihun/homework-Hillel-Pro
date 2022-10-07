const firstSport = 'football';
const secondSport = 'chess';
const thirdSport = 'tennis';
const footballChamp = 'Messi';
const chessChamp = 'Kasparov';
const tennisChamp = 'Sharapova';
let userCountry;
let usersAgeMessage;
let whatCountryUserFrom;
let whomUserWantToBeMessage;

const usersAge = prompt('Hello, user, how old are you?', '');
if (usersAge) {
    usersAgeMessage = `Your age is ${usersAge}`;
} else {
    usersAgeMessage = 'I don\'t know how old are you';
    alert('Жаль, что Вы не захотели ввести свой возраст');
};

const usersCity = prompt('What the city do you live?', '');
if (!usersCity) {
    whatCountryUserFrom = 'I don\'t know where are you live';
    alert('Жаль, что Вы не захотели ввести свой город');
} else {
    if (usersCity == 'Киев') {
    userCountry = 'Ukraine';
    whatCountryUserFrom = (`Ты живешь в столице ${userCountry}`);
    } else if (usersCity == 'Вашингтон') {
        userCountry = 'USA';
        whatCountryUserFrom = (`Ты живешь в столице ${userCountry}`);
    } else if (usersCity == 'Лондон') {
        userCountry = 'England';
        whatCountryUserFrom = (`Ты живешь в столице ${userCountry}`);
    } else {
        whatCountryUserFrom = (`Ты живешь в городе ${usersCity}`);
    }
};

const usersFavoriteSport = prompt('What is your favorite sport?', '');
if (!usersFavoriteSport) {
    whomUserWantToBeMessage = 'I don\'t know who you want to be';
    alert('Жаль, что Вы не захотели ввести свой любимый вид спорта');
} else if (usersFavoriteSport == firstSport) {
        whomUserWantToBeMessage = (`Круто! Хочешь стать ${footballChamp}?`);
} else if (usersFavoriteSport == secondSport) {
        whomUserWantToBeMessage = (`Круто! Хочешь стать ${chessChamp}?`);
} else if (usersFavoriteSport == thirdSport) {
        whomUserWantToBeMessage = (`Круто! Хочешь стать ${tennisChamp}?`);
} else {
    whomUserWantToBeMessage = 'Круто! Хочешь стать спортсменом?';
};

if (usersFavoriteSport || usersFavoriteSport == '')  {
    alert(`${usersAgeMessage}\n${whatCountryUserFrom}\n${whomUserWantToBeMessage}`);
};