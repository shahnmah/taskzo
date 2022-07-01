import React, { useState } from 'react';

const AddToDo = () => {
    const [task, setTask] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
            fetch('http://localhost:5000/addTask',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                  },
                  body: JSON.stringify({task})
            })
           .then(res => res.json())
    
        console.log(task)
        e.target.reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <input onBlur={(e)=>setTask(e.target.value)} name="task" type="text" class="form-control" placeholder="Task..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button style={{ backgroundColor: '#4773fa' }} class="input-group-text" id="basic-addon2" type='submit'> + Add Task</button>
            </form>
        </div>
    );
};

export default AddToDo;