import React from 'react';

const CalendarDisplay = ({ date }) => {
    if (!date) {
        return null;
    }

    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб','Bc'];
    const calendarDays = [];
    for (let i = 1; i < firstDayOfMonth; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(<div key={`day-${i}`} className="calendar-day">{i}</div>);
    }

    return (
        <div className="calendar-container">
            <div className="days-of-week">
                {daysOfWeek.map(day => <div key={day} className="day-of-week">{day}</div>)}
            </div>
            <div className="calendar-grid">
            {calendarDays}
            </div>
        </div>
    );
};

export default CalendarDisplay;