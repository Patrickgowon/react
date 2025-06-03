import React from "react";
const Ecom = ({ name, price, brand, disc}) =>{
    return(
        <div className=" ">
            <div className="bg-gray-300 w-fit p-3 rounded-sm">
                <p className="relative bottom-1 right-1 w-fit text-green-800 p-1 rounded-sm bg-green-200 ">{name}</p>
                <p className="font-bold text-center">{brand}</p>
                <p className="text-center">{disc}</p>
                <p className="text-center ring-1 text-gray-400 mt-3 ">{price}</p>
            </div>
            
        </div>
    )
}
export default Ecom;