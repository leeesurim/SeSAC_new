import React from 'react';
import ReactDOM from 'react-dom/client';
// import ClassComponet from './ClassComponent';
import App from './App';
import MyComponent from './MyComponent';
import Test from './Test';
import Test2 from './Test2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <ClassComponet name = {1} location="문래">문자</ClassComponet> */}
    <App /><hr />
    {/* <MyComponent /><hr /> */}
    <Test />
    <Test2 />
  </>
);
