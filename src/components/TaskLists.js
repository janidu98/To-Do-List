import style from './TaskLists.module.css';
import React, {useState} from 'react';
import DeleteTask from './DeleteTask';

const TaskLists = (props) => {

    const [visibleDeleteModel, setVisibleDeleteModel] = useState(false);
    const[taskId, setTaskId] = useState();

    // const updateHandler = (id) => {
    //     const task = props.tasks.filter(task => task.id === id);
    //     props.updateH(task);
    // }

    const handleTodoUpdate = id => {
        props.handleTodoUpdateModelOpen(id);
    }

    const handleTodoDelete = id => {
        //alert(props.confirmMsg)
        // if(props.confirmMsg){
        //     props.handleDelete(id);
        // } else return;
        setTaskId(id);
        setVisibleDeleteModel(true);
        // window.confirm('Are you sure ?')
    }

    const cancelDeleteModel = () => {
        setVisibleDeleteModel(false);
    }

    return(
        
        <>
            <div className={style.tasks}>
                {props.tasks.map(task => 
                    <div key={task.id} className={style.shadow}>
                        <h3>{task.titleName}</h3>
                        <p>{task.descName}</p>
                        <div className='d-flex justify-content-end'>
                            <button className='btn btn-success m-1' onClick={() => handleTodoUpdate(task.id)}>Update</button>
                            <button className='btn btn-danger m-1' onClick={() => handleTodoDelete(task.id)}>Delete</button>
                        </div>
                        
                    </div>                
                )}
            </div>
            {visibleDeleteModel && <DeleteTask handleDelete={props.handleDelete} taskId={taskId} cancelDeleteModel={cancelDeleteModel}/>}
        </>
    )
}

export default TaskLists;