import { Link } from 'react-router-dom';
import './ActionEdit.scss';

export function ActionEdit({id, setUserCurrentId, setEditUserStatus}) {
    const handleClick = () => {
        setUserCurrentId(id);
        setEditUserStatus(true);        
    }

    return (
        <div className="ActionEdit">
            {<Link to={`/create-new-contact/${id}`} className="btn btn-edit" id={id} onClick={handleClick}>Edit</Link>}
        </div>
    )
}