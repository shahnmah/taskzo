import React from 'react';
import AddToDo from '../AddToDo/AddToDo';
import ToDos from '../ToDos/ToDos';

const Home = () => {
    return (
        <div>
            <div className="container">
                <h4>Add your tasks</h4>
                <AddToDo/>
                <ToDos />
            </div>
        </div>
    );
};

export default Home;