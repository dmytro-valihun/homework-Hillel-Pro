// Создать сущность человека
// имя
// возраст
// Метод вывода данных

// Создать сущность автомобиля:
// Характеристики автомобиля отдельными свойствами
// Методы:
// Вывода на экран данных об этом автомобиле
// Присвоения этого автомобиля владельцу (записать в автомобиль объект владельца)

// Все данные о человеке и об автомобиле получать от пользователя. 
// Реализовать необходимые проверки на корректность ввода (пустые поля, возраст >18 для человека и т.д. по необходимости).
// Максимально использовать функции

let personName;
let personAge;
let autoBrand;
let autoModel;
let autoPrice;
let autoOwner;
let personAutoOwner;
const array = [];
let ask;

const Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.showPersonInfo = function() {
        console.log(`This person name is ${this.name}, his age is ${this.age}.`);
    }
};
const Auto = function(brand, model, price, owner) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.owner = owner;
    this.showDataAuto = function() {
        console.log(`His auto is ${this.brand}, model is ${this.model}, it's price is ${this.price}$.`);
    }
};

function addPersonName() {
    do {
        personName = prompt('Enter the name of person', '');
    } while (personName == '' || personName == ' ' || isFinite(personName))
    return personName;
};
function addPersonAge() {
    do {
        personAge = +prompt('Enter the age of person', '');
    } while (isNaN(personAge) || personAge == '' || personAge == ' ' || personAge < 18 || personAge > 100);
    return personAge;
};
function addAutoBrand() {
    do {
        autoBrand = prompt('Enter the brand of auto', '');
    } while (autoBrand == '' || autoBrand == ' ' || isFinite(autoBrand))
    return autoBrand;
};
function addAutoModel() { 
    autoModel = prompt('Enter the model of auto', ''); // no check, model can be with symbols and signs
    return autoModel;
};
function addAutoPrice() {
    do {
        autoPrice = +prompt('Enter the price', '');
    } while (isNaN(autoPrice) || autoPrice == '' || autoPrice == ' ' || autoPrice < 200)
    return autoPrice;
};
function addAutoOwner() {
    do {
        autoOwner = prompt('Enter the name of auto owner', '');
    } while (autoOwner == '' || autoOwner == ' ' || isFinite(autoOwner))
    return autoOwner;
};
function whoOwner() {
    if (autoOwner === personName) {
        personAutoOwner = new Auto(autoBrand, autoModel, autoPrice, autoOwner);
        array.push(personAutoOwner)
        return personAutoOwner;
    } else {
        return console.log(`This person ${personName} don't have any auto's`);
    }
};
function askOneMorePerson() {
    ask = confirm('Would you like to add one more person and auto?', '');
    return ask;
};
function showInfoPerson() {
    let person = new Person(personName, personAge);
    console.log(person);
    person.showPersonInfo();
};
function createOwnerOfAuto() {
    do {
        addPersonName();
        addPersonAge();
        addAutoBrand();
        addAutoModel();
        addAutoPrice();
        addAutoOwner();
        whoOwner();
        showInfoPerson()
        if (personAutoOwner) {
            personAutoOwner.showDataAuto();
            console.log(personAutoOwner);
        };
        askOneMorePerson();
    } while (ask);
};

createOwnerOfAuto();
console.log(array);