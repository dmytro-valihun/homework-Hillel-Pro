import { currentItem, currentSize, currentTopping } from '../app.js'
import { API_ORDER_INFO } from '../urls.js';

export function createElement(tagName, content, attributes, eventHandlers, parent) {
    const parentElem = typeof parent === 'string' ? document.querySelector(parent) : parent;
    const element = document.createElement(tagName);
    element.textContent = content;
    if (attributes &&  Object.keys(attributes).length > 0) {
        for (let key in attributes) {
            if (key === 'className') {
                element.setAttribute('class', attributes[key]);
            } else {
                element.setAttribute(key, attributes[key]);
            }
        }
    }
    if (eventHandlers && Object.keys(eventHandlers).length > 0) {
        for (let keyEventName in eventHandlers) {
            element.addEventListener(keyEventName, eventHandlers[keyEventName]);
        }
    }
    parentElem.appendChild(element);
    return element;
}

export function createProductCard(product, buyClickHandler) {
    const parentElem = createElement('div', '', { className: 'product-card' }, null, '.content');
    createElement('h3', product.name, null, null, parentElem);
    createElement('p', `${product.price} UAH`, null, null, parentElem);
    createElement('button', 'Buy', { type: 'button', 'data-product-id': product.id}, {click: buyClickHandler}, parentElem);
}

export function createCheckoutForm(product, changeSizeHandler, changeToppingHandler) {
    createElement('div', product.name, null, null, '.modal');

    updateProductPrice(product.price);

    const sizeP = createElement('p', '', null, null, '.modal');
    createElement('h4', 'Size', null, null, sizeP);
    createElement('input', '', {type: 'radio', name: 'size', value: 'big'}, {change: changeSizeHandler}, sizeP);
    createElement('span', 'Big', null, null, sizeP);
    createElement('input', '', {type: 'radio', name: 'size', value: 'small', checked: 'checked'}, {change: changeSizeHandler}, sizeP);
    createElement('span', 'Small', null, null, sizeP);

    const toppingsP = createElement('p', '', null, null, '.modal');
    createElement('h4', 'Options', null, null, toppingsP);
    for (let topping of product.available_toppings) {
        const p = createElement('p', '', null, null, toppingsP)
        createElement('input', '', {type: 'radio', name: 'options', value: topping.name}, {change: changeToppingHandler}, p);
        createElement('span', `${topping.name} - ${topping.price} UAH`, null, null, p);
    }
    const buttonsP = createElement('p', '', null, null, '.modal');
    createElement('input', '', {type: 'text', name: 'client_name', className: 'client-name', placeholder: 'Enter your name'}, null, buttonsP);
    createElement('button', 'Order', {type: 'button', 'data-product-id': product.id}, {click: orderProduct}, buttonsP);
    createElement('p', '', {className: 'warning'}, null, buttonsP);
}

let orderPrice;
export function updateProductPrice(newPrice) {
    const div = document.querySelector('.total-price');
    if (div) div.remove();
    orderPrice = newPrice;
    createElement('span', `Total price: ${newPrice} UAH`, {className: 'total-price'}, null, '.modal');
}

function orderProduct() {
    const clientName = document.querySelector('.client-name').value;
    if (validUserName(clientName)) {
        const orderInfo = JSON.stringify(
            {
                currentClientName: clientName, 
                product: currentItem, 
                size: currentSize || 'small', 
                option: currentTopping, 
                price: orderPrice,
            }
        );
        document.querySelector('.content').textContent = '';
        document.querySelector('.modal').textContent = '';
        fetch(API_ORDER_INFO, {
            method: 'POST',
            body: orderInfo,
            headers: {
                "Content-Type" : "application/json",
            }
        })
        .then(response => console.log(response));
    }
}

function validUserName(userName) {
    const pattern = /^[A-Z][a-z]{3,10}$/;
    const result = pattern.test(userName);
    const warning = document.querySelector('.warning');
    warning.textContent = '';
    if (result) {
        return userName;
    } else {
        warning.textContent = `Имя должно состоять из латинских букв, 
        быть с большой буквы, минимум 4 буквы`;
        return false;
    }
}