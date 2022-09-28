import React, {Component} from "react";

class ScrollBox extends Component {
    scrollBottom = () => {
        const {scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            width: "200px",
            height: "200px",
            overflow: 'auto',
            position: "relative"
        };

        const innerStyle={
            width: '100%',
            height: '1000px',
            background: 'linear-gradient(white, blue)'
        }

        return ( <>
            <div style={style} ref={(ref) => {this.box=ref}}>
            <div style={innerStyle}></div>
            </div>    
        </>)
    }
}

export default ScrollBox;