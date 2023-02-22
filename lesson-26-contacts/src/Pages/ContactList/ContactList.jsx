import './ContactList.scss';
import { Name } from '../../Components/Name/Name.jsx';
import { Surname } from '../../Components/Surname/Surname.jsx';
import { Phone } from '../../Components/Phone/Phone.jsx';
import { Actions } from '../../Components/Actions/Actions.jsx';

export function ContactList ({users, goDelete}) {

    return (
        <div className="ContactList">
            <div className='wrapper'>
                <div>Name</div>
                <div>Surname</div>
                <div>Phone</div>
                <div>Actions</div>
            </div>

            {users.map(user => (
                <div key={user.id}> 
                    <Name name={user.username}/>
                    <Surname surname={user.name}/>
                    <Phone phone={user.phone}/>
                    <Actions id={user.id} deleteRow={goDelete}/>
                </div>
            ))}
        </div>
    )
}