import React from "react";
function Greet(props) {
    return <div>
        <h1>hellow brother{2+2} life {props.name} yes {props.heroname}</h1>
        {props.children}
    </div> 
}
export default Greet;