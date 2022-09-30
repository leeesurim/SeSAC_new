import { useReducer } from "react";

function reducer(state, action){
    switch ( action.type ){
        case "INCREMENT":
            return {value: state.value + 1 };
        case "DECREMENT":
            return {value: state.value -1 };
        default: 
            return state;
    }
}

const Reducer  = () => {
    // state - 현재 상태 값
    const [state, dispatch] = useReducer(reducer, {value: 0});
    // state - {value: 0} / dispatch - action 값을 실행하는 함수
    return (
        <div>
            <h1>{state.value}</h1>

            <button onClick={() => {dispatch({ type: "DECREMENT" })}}>-1</button>
            <button onClick={() => {dispatch({ type: "INCREMENT" })}}>+1</button>
        </div>
    )
}

export default Reducer;