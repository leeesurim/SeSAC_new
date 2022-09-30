import { useState, useEffect } from "react";

const Hook = () => {
    const [name, setName] = useState("");
    const [cnt, setCnt] = useState(0);

    const changeName = e => {
        setName(e.target.value);
    }

    const changeCnt = () => {
        setCnt(cnt + 1);
    }

    // useEffect(() => {
    //     console.log("useEffect");
    //     console.log("name : ", name);
    // }, [name]);
    // 두번째 인자는 업데이트를 관리
    // [] - 빈 배열일 때는 렌더링할 때만 실행하고 어떠한 작업을 해도 실행되지 않음
    // [name] - name이 바뀔 때만 실행
    
    // LifeCycle - 특정한 값이 바뀔때만 업데이트하도록 설정
    // componentDidUpdate(prevProps, prevState){
    //     if ( prevState.name != this.state.name ){
    //         // 실행
    //     }
    // }

    useEffect(() => {
        console.log("name1 : ", name );
        return () => {
            console.log("name2 : ", name );
        }
    }, [name]);
    // 보통 업데이트된 후 작업을 실행할 수 있지만,
    // 뒷정리 함수를 이용해서 업데이트 되기 직전을 실행할 수 있음.


    return (
        <div>
            <div className="1HookEffect"> 
                <div className="box">
                    <input value={name} onChange={changeName} />
                    <button onClick={changeCnt}>+1</button>
                </div>
            </div>
            <h3>이름 : {name}</h3>
            <h4>횟수 : {cnt}</h4>
        </div>
    );
}

// CSS => .1HookEffect .box

export default Hook;