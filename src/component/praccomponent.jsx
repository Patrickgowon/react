import React from "react";
const Prac = ({name, email, phone, reg}) =>{
    return(
        <div className="bg-blue-300 mt-5 mb-5 p-5">
            <div className="bg-white w-fit p-3 shadow-lg text-gray-600">
                <p>Costumer info..</p>
                <div className="flex gap-2">
                    <p>Name:</p>
                    <p>{name}</p>
                </div>
                <div className="flex gap-2">
                    <p>Email:</p>
                <p>{email}</p>
                </div>
                <div className="flex gap-2">
                    <p>Phone:</p>
                    <p>{phone}</p>
                </div>
                <div className="flex gap-2">
                    <p>Reg-no:</p>
                    <p>{reg}</p>
                </div>

            </div>
        </div>
    )
}
export default Prac;