import React, {useState} from 'react';
import './App.css';
import TaskLists from './components/TaskLists';
import ToDoList from './components/ToDoList';
import CreateTask from './components/CreateTask';
import Notification from './components/UI/Notification';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function App() {

  //Getting value from local storage
  const getDataFromLS = () => {
    const tasks = localStorage.getItem('task');
    if(tasks) {
      return JSON.parse(tasks);
    } else {
      return [];
    }
  }

  const [taskList, setTaskList] = useState(getDataFromLS());
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [displayNotification, setDisplayNotification] = useState(false);
  const [displayMsg, setDisplayMsg] = useState('');

  const addTaskHandler = (title, description) => {
    const newTask = [...taskList, {titleName: title, descName: description, id: taskList.length ? taskList[taskList.length-1].id + 1 : 1}];
    
    localStorage.setItem('task', JSON.stringify(newTask));
    setTaskList(newTask);

  }
  
  const updateTaskHandler = (todo) => {
    // update the existing todo by it's id
    const updatedTodos = taskList.map(task => {
      if(task.id === todo.id) {
        return todo;
      }
      return task;
    })
    localStorage.setItem('task', JSON.stringify(updatedTodos));
    setTaskList(updatedTodos);

    setDisplayMsg('Todo updated successfully');
    setDisplayNotification(true);
    setTimeout(() => {
      setDisplayNotification(false);
    }, 3000)

    // close the model
    setCurrentTodo(null);
    setIsUpdating(false);
  }

  const handleTodoUpdateModelOpen = id => {
    const todo = taskList.find(task => task.id === id);

    if(todo) {
      setCurrentTodo(todo);
      setIsUpdating(true);
    }
  }

  const handleDelete = (id) => {
    
    const list = taskList.filter(task => id !== task.id);
    localStorage.setItem('task', JSON.stringify(list));
    setTaskList(list);
    setDisplayMsg('Todo deleted successfully');
    setDisplayNotification(true);
    setTimeout(() => {
      setDisplayNotification(false);
    }, 3000)
  }

  const handleTodoUpdateModelClose = () => {
    setCurrentTodo(null);
    setIsUpdating(false);
  }

  return (
    <div className="App">

      {displayNotification && <Notification message={displayMsg}/>}
      

      <ToDoList onAddTask={addTaskHandler}/>

      {isUpdating && <CreateTask update todo={currentTodo} onCancel={handleTodoUpdateModelClose} updateTaskHandler={updateTaskHandler} />}

      <TaskLists tasks={taskList} handleTodoUpdateModelOpen={handleTodoUpdateModelOpen} handleDelete={handleDelete}/>

      {taskList.length === 0 ? <p className='d-flex justify-content-center fs-3 mt-5'>No tasks to display</p> : ''}

    </div>
  );
}

export default App;
