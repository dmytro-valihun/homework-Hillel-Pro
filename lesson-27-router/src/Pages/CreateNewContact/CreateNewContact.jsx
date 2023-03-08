import './CreateNewContact.scss';
import { useEffect, useRef } from 'react';
import { validName, validPhone } from '../../validators/validator.js';
import { Link, useNavigate, useParams } from 'react-router-dom';

export function CreateNewContact({ users, userCurrentId, saveNewUser, editUserStatus, setEditUserStatus }) {
  const name = useRef('');
  const surname = useRef('');
  const phone = useRef('');
  const navigate = useNavigate();
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
      navigate('/');
    }
  }

  let filteredId = {};

  useEffect(() => {
    if (users.length > 0 && isFinite(+params.userCurrentId)) {
      filteredId = users.find(user => user.id === +params.userCurrentId);
      if (filteredId) {
        name.current.value = filteredId.username;
        surname.current.value = filteredId.name;
        phone.current.value = filteredId.phone;
      } else {
        return navigate('/error');
      }
    }
  }, [name, users, params]);

  return (
    <div className="CreateNewContact">
      {
        <form>
          <p>
            <input type="text" name='name' ref={name} placeholder='Name' />
          </p>
          <p>
            <input type="text" name='surname' ref={surname} placeholder='Surname'></input>
          </p>
          <p>
            <input type='tel' name='phone' ref={phone} placeholder='+12345678901'></input>
          </p>
          <div>
            <input type='button' className='btn btn-save' value={editUserStatus ? 'Edit' : 'Save'} onClick={saveUser} />
            <Link to='/' className='btn btn-cancel' onClick={handleCancel} >Cancel</Link>
          </div>
        </form>}
    </div>
  )
}