function showCategory() {
    const container = document.querySelector('.category');
    for (let i = 0; i < data.length; i++) {
        const elem = document.createElement('div');
        elem.textContent =  data[i].name;
        elem.setAttribute('data-category', i);
        elem.addEventListener('click', showProducts);
        container.appendChild(elem);
    }
};

function showProducts(event) {
    const resulOff = document.querySelector('.result');
    resulOff.textContent = '';
    const categoryIndex = event.target.getAttribute('data-category');
    const product = data[categoryIndex].products;
    const container = document.querySelector('.products');
    container.innerHTML = '';
    for (let i = 0; i < product.length; i++) {
        const elem = document.createElement('div');
        elem.textContent = product[i].name;
        elem.setAttribute('data-product', i);
        elem.setAttribute('data-category', categoryIndex);
        elem.addEventListener('click', showDetails);
        container.appendChild(elem);
    }
};

function showDetails(event) {
    const categoryIndex = event.target.getAttribute('data-category');
    const productIndex = event.target.getAttribute('data-product');
    const product = data[categoryIndex].products[productIndex];
    const container = document.querySelector('.details');
    container.innerHTML = '';
    const elem = document.createElement('div');
    elem.innerHTML = product.name + '<br>' + product.price + '<br>' + product.description;
    container.appendChild(elem);
    const button = document.createElement('button');
    button.textContent = 'buy';
    container.appendChild(button);
    button.addEventListener('click', buyProduct);
};

function buyProduct() {
    const resultWindow = document.querySelector('.result');
    const notification = document.createElement('div');
    notification.textContent = 'Congratulation! You done it';
    resultWindow.appendChild(notification);
    const product = document.querySelector('.products');
    product.textContent = '';
    const details = document.querySelector('.details');
    details.textContent = '';
};

showCategory();