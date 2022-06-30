import React from 'react';
import ToDos from '../Home/ToDos/ToDos';

const ToDoMain = () => {
    return (
        <div>
            <div className="container">
                <h4>To-Do</h4>
                <ToDos />
            </div>
        </div>
    );
};

export default ToDoMain;