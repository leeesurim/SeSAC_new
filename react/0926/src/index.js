import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Sample from './Sample';
import Event_ex from './ex/Event_ex';
import Practice59 from './Practice59';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /><hr />
    <Sample /><hr />
    <Event_ex /><hr />
    <Practice59 />
  </React.StrictMode>
);

