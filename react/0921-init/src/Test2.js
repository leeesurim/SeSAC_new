import React, { Component } from "react";
import com from "./com.png"

class Test2 extends Component {
    render() {
        const style = {
            color : "orange",
            fontSize : "40px",
            marginTop : "20"
        }

        return(
            <div>
                <div style={style}>
                    <h2>안녕하세요</h2>
                    <img src={com} width="400" height="200"></img>
                </div>
            </div>
        );
    }
}

export default Test2;