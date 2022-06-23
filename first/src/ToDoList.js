import React, { useState } from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDoList, setToDoList, addTask, updateTask }) => {
    const [taskInput, setTask] = useState('');
    const [isEdit, setEditStatus] = useState(false);
    const [editId, setEditId] = useState('');

    // get user input task
    const handleInput = e => {
        setTask(e.currentTarget.value);
    };

    // form submit
    const handleSubmit = e => {
        e.preventDefault();
        if (isEdit) {
            updateTask(taskInput, editId);
        } else {
            addTask(taskInput);
        }
        setEditStatus(false);
        setTask('');
    };

    // change task complete
    const handleToggle = id => {
        let items = toDoList.map(task => {
            if (task.id == id) {
                task.complete = !task.complete;
            }
            return task;
        });
        setToDoList(items);
    };

    // update post
    const handleUpdate = id => {
        let items = toDoList.filter(task => {
            return task.id == id;
        });
        setEditId(items[0].id);
        setEditStatus(true);
        setTask(items[0].task);
    };

    // delete post
    const handleDelete = () => {
        let items = toDoList.filter(task => {
            return !task.complete;
        });
        setToDoList(items);
    };

    return (
        <div>
            <div className="row">
                <form onSubmit={handleSubmit} className="mb-5">
                    <div className="row">
                        <input
                            className="col-9 me-5"
                            value={taskInput}
                            type="text"
                            onChange={handleInput}
                            placeholder="Enter task..."
                        />
                        <button className="col-2 btn btn-success">Add</button>
                    </div>
                </form>
            </div>
            {toDoList.map(todo => {
                return (
                    <ToDo
                        key={todo.id}
                        todo={todo}
                        handleToggle={handleToggle}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                    />
                );
            })}
        </div>
    );
};

export default ToDoList;
