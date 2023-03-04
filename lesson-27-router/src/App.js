import './App.scss';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ContactList } from './Pages/ContactList/ContactList';
import { CreateNewContact } from './Pages/CreateNewContact/CreateNewContact';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';

function  App() {
  const [usersArr, setUsersArr] = useState([]);
  const [modalWindowStatus, setModalWindowStatus] = useState(false);
  const [userCurrentId, setUserCurrentId] = useState('');
  const [editUserStatus, setEditUserStatus] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => setUsersArr(users))
  }, []);

  const deleteContact = () => {
    let newUsersArray = usersArr.filter(item => item.id !== userCurrentId);
    setUsersArr(newUsersArray);
    setUserCurrentId('');
    console.log(usersArr)
  }

  const saveContact = (newContact) => {
    console.log(newContact)
    if (newContact.id === userCurrentId) {
      const index = usersArr.findIndex(item => item.id === newContact.id);
      (usersArr.splice(index, 1, newContact));
      setUsersArr(usersArr);
    } else {
      const addedContact = [...usersArr, newContact];
      setUsersArr(addedContact);
    }
  }

  const handleCancel = () => {
    setEditUserStatus(false)
  }

  return (
    <div className="App">
      <BrowserRouter>

        <div className="btns-wrap">
          <Link to='/' className="btn" onClick={handleCancel} >Contact list</Link>
          <Link to='/create-new-contact' className="btn" onClick={handleCancel} >Create new contact</Link>
        </div>

        <Routes>
          <Route path='/' element={
            <ContactList 
              users={usersArr} 
              goDelete={deleteContact} 
              modal={modalWindowStatus} 
              setModal={setModalWindowStatus} 
              setUserCurrentId={setUserCurrentId}
              userCurrentId={userCurrentId} 
              setEditUserStatus={setEditUserStatus}
            />} 
          />
          <Route path='create-new-contact/:userCurrentId' element={
            <CreateNewContact 
              users={usersArr} 
              userCurrentId={userCurrentId} 
              saveNewUser={saveContact} 
              editUserStatus={editUserStatus} 
              setEditUserStatus={setEditUserStatus} 
            />} 
          />
          <Route path='/create-new-contact' element={
            <CreateNewContact 
              users={usersArr} 
              userCurrentId={userCurrentId} 
              saveNewUser={saveContact} 
              editUserStatus={editUserStatus} 
              setEditUserStatus={setEditUserStatus} 
            />} 
          />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;