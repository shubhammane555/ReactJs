
import React,{useState} from "react";
import "./new1.css";
import Output1 from "./Output1";

function  App11 () {
    const [advice, setAdvice] = useState([]);


  
        const url = "https://reqres.in/api/users?page=2";

        function HandleSubmit(event){
          event.preventDefault();
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log("****");
               console.log(json);
                setAdvice(json.data);
            } catch (error) {
                console.log("error", error);
            }
        };
  
        fetchData();
}
    
    return (
        <div>
        <form onSubmit={HandleSubmit}>
        
      
        <button type="submit" className="btn btn-sm btn-primary">View All</button>
        </form>

        <Output1 value={advice}/>
   </div>

    );
}


export default App11;

