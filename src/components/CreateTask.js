import React, {useState} from "react";
import Card from "./UI/Card";
import classes from "./CreateTask.module.css";

const CreateTask = ( {isVisible, onCancel, onAddTask, update, todo=null, updateTaskHandler=null} ) => {

    const [enterTitle, setEnterTitle] = useState(todo && todo.titleName ? todo.titleName : '');
    const [enterDescription, setEnterDescription] = useState(todo && todo.descName ? todo.descName : '');

    const titleChangeHandler = (event) => {
        event.preventDefault();

        setEnterTitle(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        event.preventDefault();

        setEnterDescription(event.target.value);
    }

    const saveHandler = () => {
        //alert(enterTitle + "\n" + enterDescription);
        if(enterTitle.trim().length === 0 || enterDescription.trim().length === 0) {
            alert("All the fields are required !!");
            return;
        }
        
        onAddTask(enterTitle, enterDescription);
        setEnterTitle('');
        setEnterDescription('');
        onCancel();

    }

    const updateHandler = () => {
        updateTaskHandler({id: todo.id, titleName: enterTitle, descName: enterDescription});
    }

    return(
        <>
        <div className={classes.backdrop} onClick={onCancel}/>
            {(isVisible || update) && 
            <Card className={classes.modal}>
                <form>
                    <label htmlFor="title">Title</label>
                    <input 
                        id="title" 
                        required
                        type="text" 
                        value={enterTitle} 
                        onChange={titleChangeHandler}
                    />
                    <label htmlFor="description">Description</label>
                    <input 
                        id="description"
                        required 
                        type="text" 
                        value={enterDescription} 
                        onChange={descriptionChangeHandler}
                    />
                </form>
                <div className="d-flex justify-content-between m-5 ">
                        <button className="btn btn-primary ms-5" onClick={update ? updateHandler : saveHandler}>{update ? 'Update' : 'Save'}</button>
                        <button className="btn btn-secondary me-5" onClick={onCancel}>Cancel</button>
                </div>
            </Card>}
            
        </>
    )
}

export default CreateTask;