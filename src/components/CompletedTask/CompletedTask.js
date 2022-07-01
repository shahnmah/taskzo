import React from 'react';

const CompletedTask = ({ completedTask }) => {
    return (
        <div className="border text-center">
            <input className='border-0 fs-5 bg-transparent' placeholder={completedTask.task} disabled/>
        </div>
    );
};

export default CompletedTask;