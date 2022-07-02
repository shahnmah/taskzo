import React, { useState } from 'react';
import './toDo.css'
import { IoMdDoneAll } from "react-icons/io";
import { BiEditAlt } from "react-icons/bi";
import { GrUpdate } from "react-icons/gr";
import Swal from 'sweetalert2'




const ToDo = ({ toDo, refetch }) => {
    const { task, _id } = toDo
    const [value, setValue] = useState(`${task}`);
    const [disabled, setDisabled] = useState(true);

    const handleEdit = () => {
        setDisabled(!disabled);
    }

    const handleUpdate = (_id) => {
        // const task = {value};
        // fetch(`http://localhost:5000/taskCollection/${_id}`, {

        //     method: 'PUT',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        //     body:JSON.stringify(task),
        // })
        // .then(res=> res.json())
        // .then(data => console.log(data))
    }

    const handleSubmittedTask = (id, task) => {
        // delete task 
        fetch(`https://arrogant-eds-13339.herokuapp.com/task/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })

        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Good job',
            showConfirmButton: false,
            timer: 1500
          })

        // add completed task
        fetch('https://arrogant-eds-13339.herokuapp.com/completedTask', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ task })
        })
            .then(res => res.json())
    }

    return (
        <div className="border d-flex justify-content-between my-3 todo">
            <button onClick={(e) => handleSubmittedTask(_id, task)} className='done-btn px-3'><IoMdDoneAll /></button>
            <input onChange={(e) => setValue(e.target.value)} className='border-0 fs-5' placeholder={task} disabled={disabled} />
            <button onClick={handleEdit}><BiEditAlt /></button>
            <button className={`${disabled ? "d-none" : "d-block"}`} onClick={(e) => handleUpdate(_id)}><GrUpdate /></button>
        </div>
    );
};

export default ToDo;