import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import Ref from './Ref';
import Validation from './Validation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Ref /><hr />
    <Validation /><hr />
  </React.StrictMode>
);

