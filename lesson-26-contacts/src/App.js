import './App.scss';
import { useEffect, useState } from 'react';
import { ContactList } from './Pages/ContactList/ContactList';
import { CreateNewContact } from './Pages/CreateNewContact/CreateNewContact';

function  App() {
  const [usersArr, setUsersArr] = useState([]);
  const [changePage, setChangePage] = useState(1);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => setUsersArr(users));
  }, []);

  const deleteContact = (id) => {
    let newUsersArray = usersArr.filter(item => item.id !== id);
    setUsersArr(newUsersArray);
  }
  const saveContact = (newContact) => {
    const addedContact = [...usersArr, newContact];
    setUsersArr(addedContact);
  }
  const changeContactPage = () => {
    setChangePage(1);
  }
  const changeFormPage = () => {
    setChangePage(2);
  }

  return (
    <div className="App">
      <div className="btns-wrap">
        <button type="button" className="btn" onClick={changeContactPage}>Contact list</button>
        <button type="button" className="btn" onClick={changeFormPage}>Create new contact</button>
      </div>
      {changePage === 1 && <ContactList users={usersArr} goDelete={deleteContact}/>}
      {changePage === 2 && <CreateNewContact users={usersArr} saveNewUser={saveContact} goBack={changeContactPage}/>}
    </div>
  )
}

export default App;