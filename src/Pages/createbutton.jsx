import { Button } from "flowbite-react";
import React,{useState} from "react";
const Buttonfunc = () =>{
    const [name, namState] = useState(1);
    const Clickbtn = () =>{
        namState(name +1);
    }
    const Clickbtn2 = () =>{
        namState(name -1);
    }
    return(
        <div className="p-10 bg-gray-300 shadow-lg w-[30rem] ml-10 mb-10">
            <p>a challenge from my boss</p>
            <div  className="flex gap-2 mt-4">
                <button className="p-2 bg-green-600 text-white" onClick={Clickbtn}>increase</button>
                <p className="text-red-700">{name}</p>
                <button className="p-2 bg-green-600 text-white" onClick={Clickbtn2}>decrease</button>
                
                <p ></p>
            </div>
        </div>
    )
}
export default Buttonfunc;