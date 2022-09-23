import React, { Component } from 'react';

class EventClass extends Component {
    state = {
        username: "",
        message: ""
    }

    // constructor(props) {
    //     super(props);
    //     this.eventChange = this.eventChange.bind(this);
    //     this.eventClick = this.eventClick.bind(this);
    // }

    // eventChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     });
    // }

    // eventClick() {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ""
    //     });
    // }

    eventChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    eventClick = () => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: "",
            message: ""
        });
    }

    eventKeyPress = (e) => {
        if(e.key === "Enter") {
            this.eventClick();
        }
    }

    render() {
        return (
            <div>
                <h1>리액트의 이벤트!! - Class </h1>

                <input
                    type="text"
                    name="username"
                    placeholder="사용자 이름"
                    value = { this.state.username }
                    onChange = { this.eventChange }
                />

                <input 
                    type="text"
                    name="message"
                    placeholder="이곳에 입력해보세요."
                    value = { this.state.message }
                    onChange={ this.eventChange }
                    onKeyPress={this.eventKeyPress}
                />

                <button onClick={this.eventClick}>클릭</button>
            </div>
        );
    }
}

export default EventClass;