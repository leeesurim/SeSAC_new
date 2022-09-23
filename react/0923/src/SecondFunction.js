import React, {useState} from 'react';

function SecondFuction() {
    const [cnt, setCnt] = useState(0);

    function Increase(){
        setCnt(cnt + 1)
    }

    function Decrease(){
        setCnt(cnt - 2)

    }

    return (
        <div>
            <h2>실습 2</h2>
            <p>{cnt}</p>
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-2</button>

        </div>
    )
}

export default SecondFuction;