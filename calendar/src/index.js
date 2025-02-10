import React from 'react';
import ReactDOM from 'react-dom/client'; 
import CalendarApp from './CalendarApp';
import './style.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); 

root.render(
  <CalendarApp />
);

