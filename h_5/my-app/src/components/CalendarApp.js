import React, { useState } from 'react';
import CalendarDisplay from './CalendarDisplay';

const CalendarApp = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleMonthChange = (event) => {
        setSelectedDate(new Date(event.target.value));
    };

    return (
        <div>
            <input type="month" value={`${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}`} onChange={handleMonthChange} />
            <CalendarDisplay date={selectedDate} />
        </div>
    );
};

export default CalendarApp;