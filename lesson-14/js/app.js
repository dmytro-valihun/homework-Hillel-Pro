const usersDate = JSON.parse(localStorage.getItem('user')) || [];
const wrapDivList = document.querySelector('.list');
const form = document.querySelector('.form');
const windowRegNewUser = document.querySelector('.register-new-user');
windowRegNewUser.hidden = true;
const newUserBtnMain = document.querySelector('.add-user');
const newUserBtnCancel = document.querySelector('.btn-cancel');
newUserBtnMain.addEventListener('click', addUser);
newUserBtnCancel.addEventListener('click', closeRegister);

function showUsers() {
    for (let i = 0; i < usersDate.length; i++) {
        createElementConstructor('div', 
        {'data-user': i}, 
        usersDate[i].name, 
        null,
        wrapDivList);
        createElementConstructor('button',
        {'data-view': i}, 
        'View',
        viewInfo,
        document.querySelector(`div[data-user='${i}']`),
        );
        createElementConstructor('button',
        {'data-remove': i}, 
        'Remove',
        removeUser,
        document.querySelector(`div[data-user='${i}']`),
        );
        createElementConstructor('button',
        {'data-edit': i}, 
        'Edit',
        editUser,
        document.querySelector(`div[data-user='${i}']`),
        );
    }
};
showUsers();

function addNewUser() {
    const userName = form.elements[0];
    const userPassword = form.elements[1];
    const userAge = form.elements[2];
    const userMail = form.elements[3];
    const userPhone = form.elements[4];
    const userCard = form.elements[5];

    const checkUserName = validUserName(userName.value);
    const checkUserPassword = validUserPassword(userPassword.value);
    const checkUserAge = validUserAge(userAge.value);
    const checkUserMail = validUserMail(userMail.value);
    const checkUserPhone = validUserPhone(userPhone.value);
    const checkUserCard = validUserCard(userCard.value);

    if (checkUserName && checkUserPassword && checkUserAge && checkUserMail && checkUserPhone && checkUserCard) {
        const btnAdd = document.querySelector(`button[data-add='add']`);
        if (btnAdd) {
            btnAdd.remove();
        }
        windowRegNewUser.hidden = true;
        newUserBtnMain.hidden = false;
        wrapDivList.hidden = false;
        const newUser = {
            name: checkUserName,
            password: checkUserPassword,
            age: checkUserAge,
            email: checkUserMail,
            phoneNumber: checkUserPhone,
            creditCardNumber: checkUserCard,
        };
        usersDate.push(newUser);
        localStorage.setItem('user', JSON.stringify(usersDate));
        while (wrapDivList.firstChild) {
            wrapDivList.removeChild(wrapDivList.firstChild);
        }
        showUsers();
    }
};

function addUser() {
    windowRegNewUser.hidden = false;
    wrapDivList.hidden = true;
    newUserBtnMain.hidden = true;
    for(let i = 0; i < form.elements.length; i++) {
        form.elements[i].value = '';
    }
    createElementConstructor('button',
    {'data-add': 'add'}, 
    'Add', 
    addNewUser, 
    windowRegNewUser,
    );
};

function closeRegister() {
    windowRegNewUser.hidden = true;
    newUserBtnMain.hidden = false;
    wrapDivList.hidden = false;
    const btnSave = document.querySelector(`button[data-save='save']`);
    if (btnSave) {
        btnSave.remove();
    }
    const btnAdd = document.querySelector(`button[data-add='add']`);
    if (btnAdd) {
        btnAdd.remove();
    }
    for (let i = 0; i < form.children.length; i++) {
        const warning = form.children[i].lastChild;
        warning.textContent = '';
    }
};