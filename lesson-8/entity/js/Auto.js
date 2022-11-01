const Auto = function(brand, model, price, owner) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.owner = owner;
    this.showDataAuto = function() {
        console.log(`His auto is ${this.brand}, model is ${this.model}, it's price is ${this.price}$.`);
    }
};