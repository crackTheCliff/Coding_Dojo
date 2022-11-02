import React, { useState } from 'react';
import './App.css';

import Input from './components/input';
import Task from './components/task';


function App() {

    const [taskList, setTaskList] = useState([]);

    return (
        <div className="App bg-light">
            <div className="container d-flex justify-content-center flex-column align-items-center p-3">
                <h2 className='text-decoration-underline'>Todo List</h2>
                <div className="w-25 m-5">
                    <h4>Add a new task:</h4>
                    <Input taskList={taskList} setTaskList={setTaskList} ></Input>
                    <h4>List of current tasks:</h4>
                    { taskList.map((task,i) => 
                        <Task key={i} index = {i} taskList={taskList} setTaskList={setTaskList} ></Task>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;