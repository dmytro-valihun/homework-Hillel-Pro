const orderForm = document.querySelector('.form');
orderForm.hidden = true;
const orderInfo = document.querySelector('.order-info');
orderInfo.hidden = true;
document.querySelector('.back').hidden = true;


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
    orderForm.hidden = true;
    orderInfo.hidden = true;
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

    let date  = new Date();
    product.date = date.toLocaleString('uk-UK');
    product.delete = false;
    button.addEventListener('click', function() {
        localStorage.setItem('product', JSON.stringify(product));
    });
};

function buyProduct() {
    orderForm.hidden = false;
    const product = document.querySelector('.products');
    product.textContent = '';
    const details = document.querySelector('.details');
    details.textContent = '';
};

showCategory();