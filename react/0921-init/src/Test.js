import React, { Component } from 'react';

class Test extends Component {
    render() {
        const name="이수림";
        const my_style = {
            backgroundColor : "blue",
            color : "orange",
            fontSize : "40px",
            padding : "12"
        }

        return(
            <div>
                <h1>실습 1</h1>
                <div style={my_style}>{name}</div>
            </div>
        );
    }
}

export default Test;