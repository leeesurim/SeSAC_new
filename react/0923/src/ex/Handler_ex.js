import React, {Component} from 'react';

class Handler_ex extends Component{

    constructor(props){
        super(props);

        this.state = {
            str: "Hello World!"
        };
    }

    render() {
        return (
            <div>
                <h2>{this.state.str}</h2>
                <button onClick={() => this.setState({str:"Goodbye World!"})}>클릭</button>
            </div>
        )
    }
}

export default Handler_ex;