import React, {useState} from 'react';

function StateFunction () {
    // msg라는 state를 빈값으로 초기화
    const [msg, setMsg] = useState("");
    const [list, setList] = useState([]);
    // this.state {
    //     msg: ""
    // }
    
    function changeMsg(){
        //setMsg -  msg 값을 바꾸는 것
        setMsg("메세지")
        // setState({msg: "메세지"})

    }

    return (
        <div>
            <p>{msg}</p>
            StateFunction
            <button onClick={changeMsg}>클릭</button>
        </div>
    )
}

export default StateFunction;