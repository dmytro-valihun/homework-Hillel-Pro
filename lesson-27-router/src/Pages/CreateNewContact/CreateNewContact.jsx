import './CreateNewContact.scss';
import { useEffect, useRef } from 'react';
import { validName, validPhone } from '../../validators/validator.js';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ErrorPage } from '../ErrorPage/ErrorPage';


export function CreateNewContact({users, userCurrentId, saveNewUser, editUserStatus, setEditUserStatus }) {
    const name = useRef('');
    const surname = useRef('');
    const phone = useRef('');
    const goHomePage = useNavigate();
    const params = useParams();
    const handleCancel = () => {
        setEditUserStatus(false);
    }

    const saveUser = () => {
        const newContactUserName = name.current.value;
        const newContactUserSurname = surname.current.value;
        const newContactUserPhone = phone.current.value;
        const isNameValid = validName(newContactUserName);
        const isSurnameValid = validName(newContactUserSurname);
        const isPhoneValid = validPhone(newContactUserPhone);

        if (isNameValid && isSurnameValid && isPhoneValid) {
            const newContact = {
                username: newContactUserName,
                name: newContactUserSurname,
                phone: newContactUserPhone,
            } 
            const result = users.filter(e => e.id === userCurrentId);
            if (result.length === 0) {
                newContact.id = Date.now()
            } else {
                newContact.id = userCurrentId
            }
            saveNewUser(newContact);
            goHomePage('/');
        }
    }

    let filteredId;
    let isParams;

    if (isFinite(+params.userCurrentId)) {
        console.log(users)// tyt------------------------------
        filteredId = users.find(user => user.id === +params.userCurrentId);
        console.log(filteredId)//tyt--------------------------
    }

    (Object.keys(params).length === 0 || filteredId.id) ? isParams = true : isParams = false;

    return (
        <div className="CreateNewContact">
            {(isParams) &&
            <form>      
                <p>
                    <input type="text" name='name' ref={name} placeholder='Enter name'></input>
                </p>
                <p>
                    <input type="text" name='surname' ref={surname} placeholder='Enter surname'></input>
                </p>
                <p>
                    <input type='tel' name='phone' ref={phone} placeholder='Enter phone'></input>
                </p>
                <div>
                    <input type='button' className='btn btn-save' value={editUserStatus ? 'Edit' : 'Save'} onClick={saveUser} /> 
                    <Link to='/' className='btn btn-cancel' onClick={handleCancel} >Cancel</Link>
                </div>
            </form>}
            {!isParams &&
            <ErrorPage />}
        </div>
    )
}


    // +params.userCurrentId === filteredId[0].id

{/* <div className="CreateNewContact">
{(isParams || editUserStatus) ?
<form>      
    <p>
        <input type="text" name='name' ref={name} placeholder='Enter name'></input>
    </p>
    <p>
        <input type="text" name='surname' ref={surname} placeholder='Enter surname'></input>
    </p>
    <p>
        <input type='tel' name='phone' ref={phone} placeholder='Enter phone'></input>
    </p>
    <div>
        <input type='button' className='btn btn-save' value={editUserStatus ? 'Edit' : 'Save'} onClick={saveUser} /> 
        <Link to='/' className='btn btn-cancel' onClick={handleCancel} >Cancel</Link>
    </div>
</form> :
errorPage('/*')}
</div> */}