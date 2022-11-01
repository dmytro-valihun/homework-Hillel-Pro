const Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.showPersonInfo = function() {
        console.log(`This person name is ${this.name}, his age is ${this.age}.`);
    }
};