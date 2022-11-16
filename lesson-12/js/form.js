document.querySelector('.gobtn').addEventListener('click', function() {
    const userName = document.forms.someForm.elements.name.value;
    const checkUser = validUserData(userName, document.forms.someForm.elements[0]);
    const userFatherName = document.forms.someForm.elements.fatherName.value;
    const checkFatherName = validUserData(userFatherName, document.forms.someForm.elements[1]);
    const userSurname = document.forms.someForm.elements.surname.value;
    const checkSurname = validUserData(userSurname, document.forms.someForm.elements[2]);
    
    const userCity = document.querySelector('select[name=city]').value;
    const checkUserCity = validUserCityAndWarehouse(userCity, document.forms.someForm.elements[3]);
    const userWarehouse = document.querySelector('select[name=warehouse]').value;
    const checkUserWarehouse = validUserCityAndWarehouse(userWarehouse, document.forms.someForm.elements[4]);

    const payMethod = document.querySelectorAll('input[type=radio]');//массив с кнопками
    let finalPayMethod = validPayMethod(payMethod);// знач кнопки (card)
    const payMethodForUserInfo = findValuePayMethod(finalPayMethod);//записуем значение с объекта (может false)
    const isPayMethod = checkPayMethod(payMethodForUserInfo);

    const quantityOfItems = document.querySelector('input[type=number]').value;
    const checkQuantity = validQuantity(document.querySelector('input[type=number]'));
    const userComment = document.querySelector('textarea[name=comment]').value;
    const checkUserComment = validUserComment(userComment);

    if (checkUser && checkFatherName && checkSurname && checkUserCity && checkUserWarehouse && isPayMethod && checkQuantity && checkUserComment) {
        const orderForm = document.querySelector('.form');
        orderForm.hidden = true;
        const orderInfo = document.querySelector('.order-info');
        orderInfo.hidden = false;
        orderInfo.children[0].textContent = `Name ${userName}`;
        orderInfo.children[1].textContent = `Father name: ${userFatherName}`;
        orderInfo.children[2].textContent = `Surname: ${userSurname}`;
        orderInfo.children[3].textContent = `Target city: ${userCity}`;
        orderInfo.children[4].textContent = `Warehouse of Nowa Poczta: ${userWarehouse}`;
        orderInfo.children[5].textContent = `You pay: ${payMethodForUserInfo}`;
        orderInfo.children[6].textContent = `You buy: ${quantityOfItems} item`;
        orderInfo.children[7].textContent = `Your comment is: ${userName}`;
    }
});


function validUserData(name, paragraf) {
    if (isFinite(name) || name == '') {
        paragraf.nextElementSibling.textContent = 'Enter the correct data';
        return false;
    } else {
        paragraf.nextElementSibling.textContent = '';
        return true;
    }
};

function validUserCityAndWarehouse(value, paragraf) {
    if (value == '') {
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
    if (sring == '') {
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
        if (key == finalPayMethod) {
            return (objPayMethod[key])
        } 
    }
};

function checkPayMethod(method) {
    if (method == undefined) {
        document.forms.someForm.children[5].children[3].textContent = 'Choise the payment method!';
        method = false;
    } else {
        document.forms.someForm.children[5].children[3].textContent = '';
        method = true;
    };
    return method;
};