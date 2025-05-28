import React from "react";
const Card  = ({name, phone}) =>{
    return(
        <div className="bg-gray-200 justify-center p-5 mt-5 h-[8rem]  w-[20rem] ml-[2rem] shadow-lg">
            <div className="flex gap-2">
                <p className="font-bold ">name:</p>
                <p>{name}</p>
            </div>
            <div className="flex gap-2 text-center">
                <p className="font-bold">phone:</p>
                <p>{phone}</p>
            </div>
        </div>
    )
}
export default Card;