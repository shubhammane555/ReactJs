import { useState } from "react";

function Child({val}){
    const[Count,SetCount]=useState(val);
    const[Value,DoubleValue]=useState(val);
return(
    <>
    <p>value is {val} increment by {Count}</p>
    <button onClick={()=>SetCount(Count+1)}>Incrementbt1</button>
    <p>value is {val} double the value by {(Value*2)}</p>
    <button onClick={()=>DoubleValue(Value*2)}>Incrementbt2</button>
    </>
);
}
export default Child;