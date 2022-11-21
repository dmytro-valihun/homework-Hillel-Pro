const buyItems = JSON.parse(localStorage.getItem('buyProducts')) || [];

document.querySelector('.gobtn').addEventListener('click', function() {
    const myElements = document.forms.someForm.elements;
    const userName = myElements.name.value;
    const checkUser = validUserData(userName, myElements[0]);
    const userFatherName = myElements.fatherName.value;
    const checkFatherName = validUserData(userFatherName, myElements[1]);
    const userSurname = myElements.surname.value;
    const checkSurname = validUserData(userSurname, myElements[2]);
    
    const userCity = document.querySelector('select[name=city]').value;
    const checkUserCity = validUserCityAndWarehouse(userCity, myElements[3]);
    const userWarehouse = document.querySelector('select[name=warehouse]').value;
    const checkUserWarehouse = validUserCityAndWarehouse(userWarehouse, myElements[4]);

    const payMethod = document.querySelectorAll('input[type=radio]');//массив с кнопками
    let finalPayMethod = validPayMethod(payMethod);// знач кнопки (card)
    const payMethodForUserInfo = findValuePayMethod(finalPayMethod);//записуем значение с объекта (может false)
    const isPayMethod = checkPayMethod(payMethodForUserInfo);

    const quantityOfItems = document.querySelector('input[type=number]').value;
    const checkQuantity = validQuantity(document.querySelector('input[type=number]'));
    const userComment = document.querySelector('textarea[name=comment]').value;
    const checkUserComment = validUserComment(userComment);

    if (checkUser && checkFatherName && checkSurname && checkUserCity && checkUserWarehouse && isPayMethod && checkQuantity && checkUserComment) {
        const valueFromLocalStorage = JSON.parse(localStorage.getItem('product')); //принимаем продукт который хотим купить
        buyItems.push(valueFromLocalStorage); //записываем продукт в массив
        localStorage.setItem('buyProducts', (JSON.stringify(buyItems))); //записываем купленный продукт
        const orderForm = document.querySelector('.form');
        orderForm.hidden = true;
        const orderInfo = document.querySelector('.order-info');
        orderInfo.hidden = false;
        const deliveryList = orderInfo.children[0];
        deliveryList.textContent = '';
        const deliveryInfo = {
            'Name' : userName, 
            'Father name': userFatherName, 
            'Surname': userSurname, 
            'Target city': userCity,
            'Warehouse of Nowa Poczta': userWarehouse,
            'You pay': payMethodForUserInfo,
            'You buy': quantityOfItems,
            'Your comment is': userComment,
        };
        for(let key in deliveryInfo) {
            const elemOl = document.createElement('li');
            elemOl.textContent = `${key}: ${deliveryInfo[key]}`;
            deliveryList.appendChild(elemOl)
        };
        const buyOneMore = document.querySelector('.buy_more');
        buyOneMore.addEventListener('click', buyMore);
    }
});

function buyMore() {
    orderInfo.hidden = true;
};

function validUserData(name, paragraf) {
    if (isFinite(name) || name === '') {
        paragraf.nextElementSibling.textContent = 'Enter the correct data';
        return false;
    } else {
        paragraf.nextElementSibling.textContent = '';
        return true;
    }
};

function validUserCityAndWarehouse(value, paragraf) {
    if (value === '') {
        paragraf.nextElementSibling.textContent = 'Enter the correct data';
        return false;
    } else {
        paragraf.nextElementSibling.textContent = '';
        return true;
    }
};

function validQuantity(num) {
    if (num.value < 1) {
        num.nextElementSibling.textContent = 'Enter the correct data';
        return false;
    } else {
        num.nextElementSibling.textContent = '';
        return true;
    }
};

function validUserComment(sring) {
    if (sring === '') {
        document.forms.someForm.elements[8].nextElementSibling.textContent = 'comment please!';
        return false;
    } else {
        document.forms.someForm.elements[8].nextElementSibling.textContent = '';
        return true;
    }
};

function validPayMethod(payMethod) {
    for (let method of payMethod) {
        if (method.checked) {
            return method.value;
        }
    }
};

function findValuePayMethod(finalPayMethod) {
    const objPayMethod = {card: 'by card', on_delivery: 'upon receipt of the goods'};
    for (let key in objPayMethod) {
        if (key === finalPayMethod) {
            return (objPayMethod[key])
        } 
    }
};

function checkPayMethod(method) {
    if (method === undefined) {
        document.forms.someForm.children[5].children[3].textContent = 'Choise the payment method!';
        method = false;
    } else {
        document.forms.someForm.children[5].children[3].textContent = '';
        method = true;
    };
    return method;
};