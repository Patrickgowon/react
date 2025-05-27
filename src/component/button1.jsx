
import React from "react";
const Button = () =>{
    const click =() =>{
        alert("ths is my home page")
    }
    return(
        <button className="mt-16 p-[1rem] bg-blue-300 " onClick={click}>click</button>
    )
}
export default Button;