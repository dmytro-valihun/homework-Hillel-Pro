import './ContactList.scss';
import { Name } from '../../Components/Name/Name.jsx';
import { Surname } from '../../Components/Surname/Surname.jsx';
import { Phone } from '../../Components/Phone/Phone.jsx';
import { DeleteModalWindow } from '../DeleteModalWindow/DeleteModalWindow.jsx';
import { ActionEdit } from '../../Components/ActionEdit/ActionEdit.jsx';
import { ActionDelete } from '../../Components/ActionDelete/ActionDelete.jsx';

export function ContactList ({users, goDelete, modal, setModal, setUserCurrentId, userCurrentId, setEditUserStatus}) {

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
                    <div>
                        <ActionDelete id={user.id} setModal={setModal} setUserCurrentId={setUserCurrentId} />
                        <ActionEdit id={user.id} userCurrentId={userCurrentId} setEditUserStatus={setEditUserStatus} setUserCurrentId={setUserCurrentId}/>
                    </div>
                </div>
            ))}

            {modal && <DeleteModalWindow 
                setModal={setModal} 
                deleteRow={goDelete} 
                userCurrentId={userCurrentId} />}
        </div>
    )
}