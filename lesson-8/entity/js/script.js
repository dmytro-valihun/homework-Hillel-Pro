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

const arrayOfOwners = [];
function addPersonName() {
    let personName;
    do {
        personName = prompt('Enter the name of person', '');
    } while (personName == '' || personName == ' ' || isFinite(personName))
    return personName;
};
function addPersonAge() {
    let personAge;
    do {
        personAge = +prompt('Enter the age of person', '');
    } while (isNaN(personAge) || personAge == '' || personAge == ' ' || personAge < 18 || personAge > 100);
    return personAge;
};
function addAutoBrand() {
    let autoBrand;
    do {
        autoBrand = prompt('Enter the brand of auto', '');
    } while (autoBrand == '' || autoBrand == ' ' || isFinite(autoBrand))
    return autoBrand;
};
function addAutoModel() { 
    let autoModel;
    autoModel = prompt('Enter the model of auto', ''); // no check, model can be with symbols and signs
    return autoModel;
};
function addAutoPrice() {
    let autoPrice;
    do {
        autoPrice = +prompt('Enter the price', '');
    } while (isNaN(autoPrice) || autoPrice == '' || autoPrice == ' ' || autoPrice < 200)
    return autoPrice;
};
function addAutoOwner() {
    let autoOwner;
    do {
        autoOwner = prompt('Enter the name of auto owner', '');
    } while (autoOwner == '' || autoOwner == ' ' || isFinite(autoOwner))
    return autoOwner;
};
function whoOwner(autoOwner, personName, autoBrand, autoModel, autoPrice, autoOwner) {
    let personAutoOwner;
    if (autoOwner === personName) {
        personAutoOwner = new Auto(autoBrand, autoModel, autoPrice, autoOwner);
        arrayOfOwners.push(personAutoOwner)
        return personAutoOwner;
    } else {
        return console.log(`This person ${personName} don't have any auto's`);
    }
};
function askOneMorePerson() {
    let ask;
    ask = confirm('Would you like to add one more person and auto?', '');
    return ask;
};
function showInfoPerson(personName, personAge) {
    let person = new Person(personName, personAge);
    console.log(person);
    person.showPersonInfo();
};
function createOwnerOfAuto() {
    let askOneMore;
    do {
        let name = addPersonName();
        let age = addPersonAge();
        let brand = addAutoBrand();
        let model = addAutoModel();
        let price = addAutoPrice();
        let owner = addAutoOwner();
        let whoIsOwner = whoOwner(owner, name, brand, model, price, owner);
        showInfoPerson(name, age)
        if (whoIsOwner) {
            whoIsOwner.showDataAuto();
            console.log(whoIsOwner);
        };
        askOneMore = askOneMorePerson();
    } while (askOneMore);
};

createOwnerOfAuto();
console.log(arrayOfOwners);