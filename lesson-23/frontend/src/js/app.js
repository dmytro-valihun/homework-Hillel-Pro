import '../scss/style.scss';

import { createElement, updateProductPrice } from './helpers/domHelpers.js';
import { API_CATEGORY_LIST, API_ITEMS_BY_CATEGORY_ID } from './urls.js';
import { createProductCard } from './helpers/domHelpers.js';
import { createCheckoutForm } from './helpers/domHelpers.js';

let productsArr = [];
let currentProduct = {};
let toppingPrice = 0;
export let currentItem;
export let currentSize;
export let currentTopping = null;

class Menu {
    constructor (toppingPrice, sizePrice) {
        this.toppingPrice = toppingPrice;
        this.sizePrice = sizePrice;
    }
    calculatePrice() {
        return this.toppingPrice + this.sizePrice;
    }
}

const changeSizeHandler = function(event) {
    const size = event.target.value;
    if (size === 'big') {
        currentProduct.updatePrice = currentProduct.price * 1.2;
        currentSize = 'big';
    } else {
        currentProduct.updatePrice = currentProduct.price;
        currentSize = 'small';
    }
    let finalPrice = currentProduct.updatePrice + toppingPrice;
    updateProductPrice(finalPrice);
}

const changeToppingHandler = function(event) {
    const toppingName = event.target.value;
    const topping = currentProduct.available_toppings.find(topping => topping.name === toppingName);
    const calcToppingPrice = new Menu(topping.price, currentProduct.updatePrice);
    toppingPrice = topping.price;
    currentTopping = topping.name;
    updateProductPrice(calcToppingPrice.calculatePrice());
}

const buyClickHandler = function(event) {
    document.querySelector('.modal').innerHTML = '';
    const productId = event.target.getAttribute('data-product-id');
    currentProduct = productsArr.find(product => product.id === productId);
    currentItem = productId;
    currentProduct.updatePrice = currentProduct.price;
    createCheckoutForm(currentProduct, changeSizeHandler, changeToppingHandler );
}

const menuClickHandler = function(event) {
    document.querySelector('.modal').innerHTML = '';
    const currentId = event.target.getAttribute('data-menu-item');
    fetch(API_ITEMS_BY_CATEGORY_ID.replace(':category', currentId))
    .then(res => res.json())
    .then(products => {
        productsArr = products;
        document.querySelector('.content').innerHTML = '';
        for (let product of products) {
            createProductCard(product, buyClickHandler)
        }
    })
}

fetch(API_CATEGORY_LIST)
    .then(res => res.json())
    .then(categories => {
        for (let category of categories) {
            createElement(
                'li',
                category.name,
                {'data-menu-item': category.id},
                {click: menuClickHandler},
                '.menu ul'
            )
        }
    })