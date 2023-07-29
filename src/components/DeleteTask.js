
import './DeleteTask.css';

const DeleteTask = (props) => {

    const handleYesOption = () => {
        props.handleDelete(props.taskId);
        props.cancelDeleteModel(false);
    }

    const handleNoOption = () => {
        props.cancelDeleteModel(false);
    }

    return(
        <>
            <div className="backdrop"/>
            <div className="deleteModel">
                <header>
                    <h5>Confirm Message</h5>
                </header>

                <div>
                    <p>Do you want to delete this todo list ?</p>
                </div>

                <footer className="d-flex justify-content-around">
                    <button className="btn btn-primary w-5" onClick={handleYesOption}>Yes</button>
                    <button className="btn btn-success" onClick={handleNoOption}>No</button>
                </footer>

            </div>
        </>
    )
}

export default DeleteTask;