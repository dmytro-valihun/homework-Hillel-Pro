const btnDeleteYes = document.querySelector('.btn-yes');
const btnDeleteNo = document.querySelector('.btn-no');
btnDeleteNo.addEventListener('click', cancelRemoveUser);
btnDeleteYes.addEventListener('click', removeUserFromStorage);
let numAttForDeleteUser;

function viewInfo(event) {
    const numAtt = event.target.getAttribute('data-view');
    const usersDiv = document.querySelector(`div[data-user='${numAtt}']`);
    const divWithUserInfo = document.querySelector(`div[data-view='info']`);
    if (divWithUserInfo) { 
        divWithUserInfo.remove()
    }
    const userInfo = usersDate[numAtt];
    createElementConstructor('div',
    {'data-view': 'info'}, 
    null, 
    null, 
    usersDiv,
    );
    for (let key in userInfo) { 
        createElementConstructor('div',
        null, 
        `${key}: ${userInfo[key]}`, 
        null, 
        document.querySelector(`div[data-view='info']`),
        );
    }
};

function removeUser(event) {
    windowRegNewUser.hidden = true;
    newUserBtnMain.hidden = true;
    wrapDivList.hidden = true;
    numAttForDeleteUser = event.target.getAttribute('data-remove');
    popup.hidden = false;
};

function removeUserFromStorage() {
    popup.hidden = true;
    newUserBtnMain.hidden = false;
    wrapDivList.hidden = false;
    const usersDiv = document.querySelector(`div[data-user='${numAttForDeleteUser}']`);
    usersDiv.remove();
    usersDate.splice(numAttForDeleteUser, 1);
    localStorage.setItem('user', JSON.stringify(usersDate));
};

function cancelRemoveUser() {
    popup.hidden = true;
    windowRegNewUser.hidden = true;
    newUserBtnMain.hidden = false;
    wrapDivList.hidden = false;
};

function editUser(event) {
    windowRegNewUser.hidden = false;
    newUserBtnMain.hidden = true;
    wrapDivList.hidden = true;
    const numAtt = event.target.getAttribute('data-edit');
    const btnAdd = document.querySelector(`button[data-add='add']`);
    if (btnAdd) {
        btnAdd.remove();
    }
    const btn = createElementConstructor('button',
    {'data-save': 'save'}, 
    'Save', 
    saveDataUser, 
    windowRegNewUser,
    );

    const userName = form.elements[0];
    const userPassword = form.elements[1];
    const userAge = form.elements[2];
    const userMail = form.elements[3];
    const userPhone = form.elements[4];
    const userCard = form.elements[5];

    const userInfo = usersDate[numAtt];
    const arrWithUserValue = [userName, userPassword, userAge, userMail, userPhone, userCard];
    let i = 0;
    for (let key in userInfo) {
        arrWithUserValue[i].value = userInfo[key];
        i++
    }

    function saveDataUser() {
        const checkUserName = validUserName(userName.value);
        const checkUserPassword = validUserPassword(userPassword.value);
        const checkUserAge = validUserAge(userAge.value);
        const checkUserMail = validUserMail(userMail.value);
        const checkUserPhone = validUserPhone(userPhone.value);
        const checkUserCard = validUserCard(userCard.value);

        if (checkUserName && checkUserPassword && checkUserAge && checkUserMail && checkUserPhone && checkUserCard) {
            windowRegNewUser.hidden = true;
            newUserBtnMain.hidden = false;
            wrapDivList.hidden = false;
            btn.remove();
            const newUser = {
                name: checkUserName,
                password: checkUserPassword,
                age: checkUserAge,
                email: checkUserMail,
                phoneNumber: checkUserPhone,
                creditCardNumber: checkUserCard,
            };
            usersDate.splice(numAtt, 1, newUser);
            localStorage.setItem('user', JSON.stringify(usersDate));
            while (wrapDivList.firstChild) {
                wrapDivList.removeChild(wrapDivList.firstChild);
            }
            showUsers();
        } 
    }
};