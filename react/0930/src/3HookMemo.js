import { useEffect, useMemo, useCallback, useState, useRef } from "react";

function getAverage(list) {
    console.log("getAverage");
    var sum = 0;
    if ( list.length == 0 ) return sum;
    for ( let i = 0; i < list.length; i++){
        sum = sum + i;
    }
    return sum / list.length;
}

// Memo - 연산을 최적화시켜주는 Hook으로 특정한 값을 기억
const Memo  = () => {
    console.log("memo");
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    const input = useRef();

    const onChange = e => {
        console.log("onChange");
        setNum(e.target.value);
    }
    // const avg = getAverage(list); 일 경우
    // state 바뀔 때마다 리렌더링함. 리렌더링하면 컴포넌트에 선언된 것 모두 읽음
    // 함수를 다시 정의하고 실행하라는 것도 다시 실행함
    // onoChange - input 작성할 때마다 리렌더링되고 다시 실행되기 때문에 getAverage도 실행되는 것

    // const onInsert = e => {
    //     setList([...list, parseInt(num)]);
    //     console.log( list );
    //     setNum(0);
    // }
    
    // Callback
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(num));
        setList(nextList);
        setNum("");
        input.current.focus();
    }, [num, list]);

    // Callback - 함수를 반환, 리렌더링할 때 함수들이 계속 재선언되는데 이걸 방지하기 위해서 사용하는 것
    // const onChange - 첫번째 인자로 받은 콜백함수를 반환해줌.
    // [] - 두번째 인자가 빈배열일 때는 렌더링할 때만 실행. 값을 지정할 때는 그 값이 변경될 때 실행
    // const onChange = useCallback(e => {
    //     setNum(e.target.value);
    // }, []);

    // const avg = getAverage(list);
    // 첫번째 방법 - [list]가 바뀔때만 해당 함수를 실행해라.
    const avg = useMemo(() => getAverage(list), [list]);
    // 두번째 방법 - useMemo => useEffect로 바꿀 수 있음
    // const [avg, setAvg] = useState(0);
    // useEffect(() => {
    //     setAvg(getAverage(list));
    // }, [list]);
    
    return (
        <div>
            <input value={num} onChange={onChange} />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v,i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                <b>평균값 : {avg}</b>
            </div>
        </div>
    )
}

export default Memo;