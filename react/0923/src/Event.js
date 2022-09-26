import React, { useState } from "react";


function Event(){
    function clickEvent(e) {
        console.log(e);

        let list = ['a', 'b', 'c'];
        let newList = list.map((value, index, arr) => {
            console.log( value );
            console.log( index );
            console.log( arr );
            return value + index;
        });
        console.log(newList);
    }
    
    function aCick(e){
        e.preventDefault();
        console.log("aClick");
        console.log(e);
    }
    return(
        <div>
            <h1>Event</h1>
            <a href="#" onClick={aCick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    )
}


export default Event;