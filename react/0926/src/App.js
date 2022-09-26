import React, {useState} from 'react';
import Sample from "./Sample";

function App() {
  const [list, setList] = useState(['test', 'testing', 'apple', 'sesac', 'animal']);

  function filterCheck(){
    let lists = ['test', 'testing', 'apple', 'sesac', 'animal'];
    let newList = [];

    for ( let i = 0; i < list.length; i++ ){
      if( list[i].length > 4) newList.push(lists[i]);
    }


    newList = lists.filter((value) => {
      return value.length > 4;
    })
  }

  function addElement() {
    // list.push('s'); // push - list에 요소를 추가 / react에서는 재렌더링 영향을 미치지 못함
    console.log([...list, 's']); // 전개구문 사용
    setList(list);

    let newList = [];
    for ( let i = 0; i < list.length; i++ ){
      console.log(i);
      console.log( list[i] );
      newList.push( i + list[i] );
    }

    newList = list.map((value, i) => {
      console.log( i );
      console.log( value );
      return i + value;
    })
  }

  return (
    <div>
      <ul>
        {list.map((name, i) => {
          return <li key={i}> {name}</li> //{i} 그대로 쓰면 좋지 않음.
        })}
      </ul>
      <ul>
        {list.filter((name) => { // 컴포넌트 바로 보여주기 위해 사용하지 않음
          return name.includes("a");
        })}
      </ul>
      <button onClick={addElement}>추가</button>
    </div>
  );
}


export default App;
