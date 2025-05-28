import React from "react";
const Custombutton = ({display, text}) =>{
    const Handclick = () =>{
        alert(display);
    }
    return(
       
            <button className="p-2 bg-blue-200 mt-10 mb-4 ml-3" onClick={Handclick}>{text}</button>

    )
}
export default Custombutton;