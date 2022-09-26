import './App.css';
import React from 'react';
import MyCoponent from './MyComponent';

// function App() {

//   return (
//     <>
//    <h1>리액트 안녕!</h1>
//    <h2>잘 작동하니?</h2>
//     </>
//   );
// }

const App = () => {
  return <MyCoponent name="React" favoriteNumber={2}>리액트</MyCoponent>;
};

export default App;
