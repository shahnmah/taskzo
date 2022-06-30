import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './CalenderMain.css'

const CalendarMain = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <div className="container">
             <div>
             <Calendar onChange={onChange} value={value} />
             </div>
            </div>
        </div>
    );
};



export default CalendarMain;