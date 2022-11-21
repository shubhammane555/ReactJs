import { useState } from "react";

function Count({val}){
    const[count,setcount]=useState(val);
    
    const[temp, setTemp] = useState();
        
    const abc=(event)=>{
        if(event.target.value==="futurense"){

      
        setTemp("hello futurense");
        return;
        }
    };
        
return (
    <div>
      
        <p>count is{val} inrement by {count}</p>
        <button onClick={()=>setcount(count+1)}>Counter</button>
        <input name="aaa" type="text" onChange={abc}/>
        <p>target value is : {temp}</p>
    </div>
)
}
export default Count;