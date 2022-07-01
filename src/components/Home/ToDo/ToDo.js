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

    const handleSave = (val) => {
        console.log('Edited Value -> ', val);
        setValue(val);
    };
    const handleEdit = () => {
        setDisabled(!disabled);
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('enter press here! ')
        }
        console.log('event')
    }
    const handleUpdate = () => {
        console.log(value)
    }

    const handleSubmittedTask = (id, task) => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })

        Swal.fire(
            'Good job!',
            'You completed the task!',
            'success'
        )

        fetch('http://localhost:5000/completedTask',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify({task})
        })
       .then(res => res.json())
    }

    return (
        <div className="border d-flex justify-space-between my-3 todo">
            <button onClick={(e) => handleSubmittedTask(_id, task)} className='done-btn px-3'><IoMdDoneAll /></button>
            <input onKeyPress={(e) => e.key === 'Enter' && handleKeyPress} placeholder={task} disabled={disabled} />
            <button onClick={handleEdit}><BiEditAlt /></button>
            <button className={`${disabled ? "d-none" : "d-block"}`} onClick={handleUpdate}><GrUpdate /></button>
        </div>
    );
};

export default ToDo;