import React from 'react';
import ToDos from '../ToDos/ToDos';

const Home = () => {
    return (
        <div>
            <div className="container">
                <h4>Add your tasks</h4>
                <ToDos />
            </div>
        </div>
    );
};

export default Home;