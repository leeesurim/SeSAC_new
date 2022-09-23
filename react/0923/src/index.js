import React from 'react';
import ReactDOM from 'react-dom/client';
import StateClass from './StateClass';
import StateFunction from './StateFunction';
import FirstClass from './FirstClass';
import SecondFuction from './SecondFunction';
import EventClass from './EventClass';
import EventFunction from './EventFunction';
import EventFunction2 from './EventFunction2';
import Event from './Event';
import EventClass2 from './EventClass2';
import Handler_ex from './ex/Handler_ex';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateClass></StateClass><hr />
    <StateFunction></StateFunction><hr />
    <FirstClass></FirstClass><hr />
    <SecondFuction></SecondFuction><hr />
    <EventClass></EventClass>
    <EventFunction></EventFunction>
    <EventFunction2></EventFunction2><hr />
    <Event></Event>
    <EventClass2></EventClass2><hr />
    <Handler_ex></Handler_ex>
  </React.StrictMode>
);


