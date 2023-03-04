import './ActionDelete.scss';

export function ActionDelete({id, setModal, setUserCurrentId}) {
    const handleClick = () => {
        setModal(true);
        setUserCurrentId(id);
    }

    return (
        <div className="ActionDelete">
            <button type="button" className="btn btn-delete" id={id} onClick={handleClick}>Delete</button>
        </div>
    )
}