import './CreateNewContact.scss';
import { useRef } from 'react';
import { validName, validPhone } from '../../validators/validator.js';

export function CreateNewContact({ users, saveNewUser, goBack}) {
    const name = useRef('');
    const surname = useRef('');
    const phone = useRef('');

    const saveUser = () => {
        const newContactUserName = name.current.value;
        const newContactUserSurname = surname.current.value;
        const newContactUserPhone = phone.current.value;
        const isNameValid = validName(newContactUserName);
        const isSurnameValid = validName(newContactUserSurname);
        const isPhoneValid = validPhone(newContactUserPhone);

        if (isNameValid && isSurnameValid && isPhoneValid) {
            const newContact = {
                username: newContactUserName, //это не перепутал, а чтоб максимально приблизить к тому виду что получаем с серва
                name: newContactUserSurname,
                phone: newContactUserPhone,
                id: Date.now(),
            } 
            saveNewUser(newContact);
            goBack();
        }
    }
    
    const cancelClick = () => {
        goBack()
    }

    return (
        <div className="CreateNewContact">
            <form>
                <p>
                    <input type="text" name='name' ref={name} placeholder='Enter your name'></input>
                </p>
                <p>
                    <input type="text" name='surname' ref={surname} placeholder='Enter your surname'></input>
                </p>
                <p>
                    <input type='tel' name='phone' ref={phone} placeholder='Enter your phone'></input>
                </p>
                <div>
                    <button type='button' className='btn btn-save' onClick={saveUser}>Save</button>
                    <button type='button' className='btn btn-cancel' onClick={cancelClick}>Cancel</button>
                </div>
            </form>
        </div>
    )
}