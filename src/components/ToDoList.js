import React, { useState } from "react";
import CreateTask from "./CreateTask";

const ToDoList = ({ onAddTask }) => {

    const [taskVisible, setTaskVisible] = useState(false);

    const taskHandler = () => {
        setTaskVisible(true);       
    }

    const cancelHandler = () => {
        setTaskVisible(false);
    }

    return(
        <div>
            
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-primary" onClick={taskHandler}>Create Task</button>
            </div>

            {taskVisible && <CreateTask onAddTask={onAddTask} isVisible={taskVisible} onCancel={cancelHandler}/>}

            <div className="task-container">
  
            </div>
        </div>
    )
}

export default ToDoList;