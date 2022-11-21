import React,{useState} from "react";
import Output from "./Output";

export function Header(){
    return(
        <div>
            <h1 className="display-3">Welcome User</h1>
        </div>
    );
}

export function Form(){
    const[id,setID]=useState();
    const[temp ,setTemp]=useState({});

    const url=`https://reqres.in/api/users/${id}`
    let data={};
    function onSubmitWithID(event){
        event.preventDefault();
        const fetchData=async()=>{
            try{
                const response=await fetch(url);
                const json=await response.json();
                data=json.data;

                setTemp(data)
            }
            catch(error){
                console.log("error",error);
            }
        };
        fetchData();
    }


    return(
        <div>
            <h3 className="display-5">User Details</h3>
            <form onSubmit={onSubmitWithID}>
                <lebal htmlfor="userID">Enter User ID:</lebal>
                <input name="userID" placeholder="enter user id" onChange={(event)=> setID(event.target.value)}/>
               <button type="submit" className="btn btn-sm btn-primary">Go</button>
            </form>

            <Output value={temp}/>
        </div>
    )
}