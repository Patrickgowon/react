import React from "react";
const Custombutton = ({name, colour}) =>{
    const Handclick = () =>{
        alert("button is click");
    }
    return(
        <div className="bg-gray-200">
            <div className="flex">
                <p className="font-bold">name: </p>
                <p>{name}</p>
            </div>
            <div className="flex">
                <p className="font-bold">color: </p>
                <p>{colour}</p>
            </div>
            <button className="p-2 bg-blue-200 mt-10 mb-4 ml-3" onClick={Handclick}>Handclick</button>
        </div>
    )
}
export default Custombutton;