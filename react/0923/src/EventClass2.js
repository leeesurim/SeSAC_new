import React, {Component} from 'react';

class EventClass2 extends Component {

    constructor(props){
        super( props );

        this.printConsole = this.printConsole.bind(this);
    }

    printConsole(msg){
        console.log( "printConsole" );
        console.log( msg );
        console.log( this );
    }

    // 화살표 함수일 때는 bind 안해도 됨
    printConsole2 = () => {
        console.log( "printConsole2" );
        console.log( this );
    }

    // sendPrameter = () => {
    //     this.printConsole('2')
    // }
    // {this.sendPrameter}
    render(){
        return (
            <div>
                <button onClick={() => {this.printConsole('2')}}>printConsole</button>
                <button onClick={this.printConsole2}>printConsole2</button>
            </div>
        )
    }
}

export default EventClass2;