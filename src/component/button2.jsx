
import React from "react";

const Button = () =>{
    const order = () =>{
        alert("this is my login page")
    }
    return(
        <button className="mt-16 p-[1rem] bg-blue-300 "  onClick={order}>click</button>
    )
}
export default Button;