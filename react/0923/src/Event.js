import React, { useState } from "react";


function Event(){
    function clickEvent(e) {
        console.log(e);
    }
    function aCick(e){
        e.preventDefault();
        console.log("aClick");
        console.log(e);
    }
    return(
        <div>
            <a href="#" onClick={aCick}>a태그</a>
            <button onClick={clickEvent}>클릭</button>
        </div>
    )
}


export default Event;