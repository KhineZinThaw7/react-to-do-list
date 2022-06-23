import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './bootstrap.min.css';

let data = [
    {
        id: 1,
        task: 'To Do 1',
        complete: false,
    },
    {
        id: 2,
        task: 'To DO 2',
        complete: false,
    },
];

function App() {
    const [toDoList, setToDoList] = useState(data);

    // create Task
    const addTask = taskInput => {
        let id = toDoList.length + 1;
        let items = [...toDoList, { id, task: taskInput, complete: false }];
        setToDoList(items);
    };

    // update Task
    const updateTask = (taskInput, id) => {
        let items = toDoList.map(todo => {
            if (todo.id == id) {
                todo.task = taskInput;
            }
            return todo;
        });
        setToDoList(items);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6 bg-light p-5">
                    <h3 className="text-center mb-5">TO DO LIST</h3>
                    <ToDoList toDoList={toDoList} setToDoList={setToDoList} addTask={addTask} updateTask={updateTask} />
                </div>
            </div>
        </div>
    );
}

export default App;
