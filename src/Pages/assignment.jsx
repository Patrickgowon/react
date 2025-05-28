import React from "react";
import Custombutton from "../component/constombutton";
const Homeassign = () =>{
   return(
    <div className="bg-gray-200 w-[30rem] h-[10rem] p-2 mt-10 ml-10 shadow-lg">
        <p className="mb-3">this will be the message shown in the alert when the button is click</p>
        <Custombutton name={'godwin'}colour={'blue'} />
    </div>
   )
}
export default Homeassign;