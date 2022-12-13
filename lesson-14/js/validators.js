function validUserName(name) {
    const pattern = /^[A-Z][a-z]{1,}$/;
    const result = pattern.test(name);
    let warning = form.children[0].lastChild;
    warning.textContent = '';
    if (result) {
        return name;
    } else {
        warning.textContent = `Имя должно состоять из латинских букв, 
        быть с большой буквы, минимум 2 знака`;
        return false;
    }
};
function validUserPassword(password) {
    const pattern = /^(?=.+[0-9])(?=.+[a-z])(?=.+[A-Z])[0-9a-zA-Z]{8,16}$/;
    const result = pattern.test(password);
    let warning = form.children[1].lastChild;
    warning.textContent = '';
    if (result) {
        return password;
    } else {
        warning.textContent = `Пароль должен содержать от 8 до 16 символов, 
        содержать хотя бы одну цифру,
        маленькую латинскую букву,
        большую латинскую букву`;
        return false;
    }
};
function validUserAge(age) {
    const pattern = /^\d{1,}$/;
    const result = pattern.test(age);
    let warning = form.children[2].lastChild;
    warning.textContent = '';
    if (result && age >= 18 && age < 123) {
        return age;
    } else {
        warning.textContent = `Вы можете зарегистрировать пользователя если ему 18 или больше, 
        для ввода используйте цифры`;
        return false;
    }
};
function validUserMail(mail) {
    const pattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,4}$/;
    const result = pattern.test(mail);
    let warning = form.children[3].lastChild;
    warning.textContent = '';
    if (result) {
        return mail;
    } else {
        warning.textContent = `Введите корректный Email`;
        return false;
    }
};
function validUserPhone(phone) {
    const pattern = /^\+\d{11,12}$/;
    const result = pattern.test(phone);
    let warning = form.children[4].lastChild;
    warning.textContent = '';
    if (result) {
        return phone;
    } else {
        warning.textContent = `Номер должен начинаться с + и включать код страны (без скобок)`;
        return false
    };
};
function validUserCard(card) {
    const pattern = /^\d{16}$/;
    const result = pattern.test(card);
    let warning = form.children[5].lastChild;
    warning.textContent = '';
    if (result) {
        return card;
    } else {
        warning.textContent = `Номер карты должен состоять из 16 цифр без пробелов`;
        return false;
    }
};