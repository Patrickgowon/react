import React from "react";
import Custombutton from "../component/constombutton";
const Homeassign = () =>{
   return(
    <div className="bg-gray-200 w-[30rem] h-[10rem] p-2 mt-10 ml-10 shadow-lg">
        <p className="mb-3">welome to my assignment</p>
        <Custombutton display={"this will be the message shown in the alert when the button is click"}text={'click me'} />
    </div>
   )
}
export default Homeassign;