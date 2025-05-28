import React from "react";
 const Workbtn = ({display,text}) =>{
    const Click = () =>{
        alert(display)

    }
    return(
        <button className="p-3 bg-green-200 mt-18 ml-3" onClick={Click}>{text}</button>
    )
 }
 export default Workbtn;