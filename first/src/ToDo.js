import React from 'react';
import './App.css';
import './bootstrap.min.css';

const ToDo = ({ todo, handleToggle, handleUpdate, handleDelete }) => {
    // change task complete status
    const handleChange = e => {
        handleToggle(e.currentTarget.id);
    };

    // edit task
    const handleEdit = e => {
        handleUpdate(e.currentTarget.id);
    };

    return (
        <div key={todo.id} className="row mb-3 pb-3 border-bottom border-dark">
            <div className="col-8">
                <input type="checkbox" className="me-2" checked={todo.complete} id={todo.id} onChange={handleChange} />
                <label className={todo.complete ? 'strike' : ''}>{todo.task}</label>
            </div>
            <div className="col-4">
                <button className="btn btn-info me-2" id={todo.id} onClick={handleEdit}>
                    Edit
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ToDo;
