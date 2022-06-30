import React, { useState } from 'react';
import EdiText from 'react-editext'
import './toDo.css'
import { IoMdDoneAll } from "react-icons/io";


const ToDo = ({ toDo }) => {
    const {title} = toDo
    const [value, setValue] = useState(`${title}`);

    const handleSave = (val) => {
        console.log('Edited Value -> ', val);
        setValue(val);
    };
    return (
        <div className="border d-flex justify-content-between my-3 todo">
            <button className='done-btn px-3'><IoMdDoneAll/></button>
            <EdiText type="text" value={value} onSave={handleSave} />
        </div>
    );
};

export default ToDo;