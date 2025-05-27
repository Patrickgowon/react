import React from "react";

const Button = () => {
    const order = () =>{
        alert('order placed');
    }
    return(
        <button className="p-2 bg-blue-400" onClick={order}>Order</button>
    )
}

export default Button;