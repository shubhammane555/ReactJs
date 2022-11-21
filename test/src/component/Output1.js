import React from "react";

export default function Output1({value}){

    return(
        <>
         <table>
        <tr>
     <th>ID</th>
     <th>EMail</th>
     <th>first Name</th>
     <th>last name</th>
     <th>avatar</th>
   </tr>
   {value.map((item, key) => {
     return (
       <tr key={key}>
         <td>{item.id}</td>
         <td>{item.email}</td>
         <td>{item.first_name}</td>
         <td>{item.last_name}</td>
         <td><img src={item.avatar} alt = "avatar"></img></td>
       </tr>
     )
   })}
   </table>
        </>
    )
}