import './DeleteModalWindow.scss'; 

export function DeleteModalWindow({setModal, deleteRow, userIdForDelete}) {

    const noDeleteContact = ()=> {
        setModal(false);
    }
    const deleteContact = () => {
        deleteRow(userIdForDelete);
        setModal(false);
    }

    return (
        <div className="DeleteModalWindow" id='DeleteModalWindow'>
            <div className='wrap'>
                <p>Are You sure?</p>
                <div className='wrap_btn'>
                    <button type='button' className="btn btn-delete" onClick={deleteContact}>Yes</button>
                    <button type='button' className="btn btn-save" onClick={noDeleteContact}>No</button>
                </div>
            </div>
        </div>
    )
}