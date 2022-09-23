import React, { Component } from 'react';

class StateClass extends Component { // extends - 부모로부터 상속 받은 것
    // 구조체를 사용해서 state 적용(기존 방식)
    constructor(props){ // 구조체
        super(props); // super - 상속받은 부모 객체 호출

        this.state = {
            name: "SeSAC",
            list: ['s', 'e', 's', 'a','c']
        };
    }

    // 구조체 없이 state 사용(최근 방식)
    // state = {
    //     name: "SeSAC",
    //     cnt: 0,
    //     list: ['s', 'e', 's', 'a', 'c']
    // }

    render() {
        return(
            <div>
                <div>{this.state.name}StateClass {this.state.cnt}</div>
                <button onClick={()=>{
                    // setState - 비동기처리라서 순서대로 진행되지 않고, 바로 실행되지 않음.
                    // this.setState({name: "청년취업사관학교", cnt: this.state.cnt + 1});
                    // this.setState({name: "영등포 캠퍼스", cnt: this.state.cnt + 1});

                    // setState에 함수 설정
                    this.setState(prevState => {
                        return { cnt: prevState.cnt + 1}
                    });
                    this.setState(prevState => {
                        return { cnt: prevState.cnt + 1}
                    });
                }}>클릭</button>
                <button onClick={()=>{this.setState({list: ['c', 'l', 'i']})}}>클릭2</button>
                <ul>
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default StateClass;