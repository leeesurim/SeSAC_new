	
import React, { Component } from 'react';
// import Validation from './Validation';
import Scroll from './Scroll';
import ScrollBox from './ScrollBox';
 
class App extends Component {
  render() {
    return(
      // <Validation />
      <div>
        <Scroll ref={(ref) => this.scroll=ref} />
        <button onClick={() => this.scroll.scrollBottom()}>맨 밑으로</button>
        <hr />
        <ScrollBox ref={(ref) => this.scrollbox=ref} />
        <button onClick={() => this.scrollbox.scrollBottom()}>맨 밑으로</button>
      </div>
    )
  }
}
 

// function App() {
//   return (
//     <div className="App"></div>
//   );
// }

export default App;

class Shape {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
  getArea() {
    return this.w * this.h;
  }
}

class Square extends Shape{}

class Triangle extends Shape{
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
  getArea(){
    return this.w * this.h/2;
  }
}

let shape1 = new Shape(5, 4);
console.log( shape1.getArea() );

let shape2 = new Shape(2, 3);
console.log( shape2.getArea() );

let shape3 = new Shape(4, 8);
console.log( shape3.getArea() );

// class Student{
//   constructor(name, shcool, age, sID){
//       this.name = name;
//       this.shcool = shcool;
//       this.age = age;
//       this.sID = sID;
//   }
//   getInfo(){
//     return `
//     이름: ${this.name}
//     학교: ${this.shcool}
//     나이: ${this.age}
//     학번: ${this.sID}
//     `;
//   }
// }

// class Kim extends Student{
//   constructor(name, shcool, age, sID){
//     super(name, shcool, age, sID);
// }
  
// }

// class Lee extends Student{
//   constructor(name, shcool, age, sID){
//     super(name, shcool, age, sID);
// }
// }

// let kimCat = new Kim("김", "새싹대", "25", "2016");
// console.log(kimCat.getInfo());
// let leeDog = new Lee("이", "새싹대", "20", "2022");
// console.log(leeDog.getInfo());
