import React, { Component } from 'react';

class StateClass extends Component {

    state = {
        cnt: 0
    }



    render() {
        return(
            <div>
                <h2>실습 1</h2>
                <p>{this.state.cnt}</p>
                <button onClick={()=>{this.setState({cnt: this.state.cnt + 2})}}>+2</button>
                <button onClick={()=>{this.setState({cnt: this.state.cnt - 1})}}>-1</button>

            </div>
        );
    }
}

export default StateClass;
