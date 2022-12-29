class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.arrBurgerDatas.push(this.size, this.stuffing);
    }
    arrBurgerDatas = [];
    static size_small = ['50 тугриков', '20 калорий'];
    static size_big = ['100 тугриков', '40 калорий'];
    static stuffing_cheese = ['10 тугриков', '20 калорий'];
    static stuffing_salad = ['20 тугриков', '5 калорий'];
    static stuffing_potato = ['15 тугриков', '10 калорий'];
    static topping_spice = ['15 тугриков', '0 калорий'];
    static topping_mayonez = ['20 тугриков', '5 калорий']; 
    addTopping(topping) {
        return this.arrBurgerDatas.push(topping);
    }
    calculateCalories() {
        let num = 0;
        this.arrBurgerDatas.forEach(index => {
            num += parseInt(index[1]);
        })
        return num;
    }
    showCalories(){
        console.log('Calories: ' + this.calculateCalories());
    }
    calculatePrice() {
        let num = 0;
        this.arrBurgerDatas.forEach(index => {
            num += parseInt(index[0]);
        })
        return num;
    }
    showPrice() {
        console.log('Price: ' + this.calculatePrice());
    }
};

const hamburger = new Hamburger(Hamburger.size_big, Hamburger.stuffing_potato);
hamburger.addTopping(Hamburger.topping_mayonez);
hamburger.showCalories();
hamburger.showPrice();
hamburger.addTopping(Hamburger.topping_spice);
hamburger.showCalories();
hamburger.showPrice();
console.log('-----') //решил проверить себя)
const namb2 = new Hamburger(Hamburger.size_small, Hamburger.stuffing_potato);
namb2.addTopping(Hamburger.topping_spice);
namb2.showCalories();
namb2.showPrice();