import React, { useState } from 'react';
import './AddToDo.css'
import Swal from 'sweetalert2'


const AddToDo = () => {
    const [task, setTask] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(task){
            fetch('https://arrogant-eds-13339.herokuapp.com/addTask',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                  },
                  body: JSON.stringify({task})
            })
           .then(res => res.json())

            e.target.reset();

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Task Added',
                showConfirmButton: false,
                timer: 1500
              })

            window.location.reload()
        }
        else{
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Write your task first',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='addToDoForm'>
                    <input onBlur={(e)=>setTask(e.target.value)} name="task" type="text" className="form-control" placeholder="Task..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button style={{ backgroundColor: '#4773fa' }} className="input-group-text" id="basic-addon2" type='submit'> + Add Task</button>
            </form>
        </div>
    );
};

export default AddToDo;