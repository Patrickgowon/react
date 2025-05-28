import React from "react";
import Button from "../component/button1";
import Card from "../component/cart";
const Homme = () =>{
    return(
        <div className="h-[10rem] w-[30rem] bg-gray-100">    
            <Button/>
            <div className="flex">
                <Card name={'godwin'} phone={'080567785'}/>
                <Card name={'john'} phone={'0806555555'} />
            </div>
        </div>
    )
}
export default Homme;