import './Actions.scss'

export function Actions({id, deleteRow}) {

    const handleClick = () => {
        deleteRow(id)
    }

    return (
        <div className="Actions">
            <button type="button" className="btn btn-delete" id={id} onClick={handleClick}>Delete</button>
        </div>
    )
}