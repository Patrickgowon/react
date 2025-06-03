import React from "react";
const Fruit =() =>{
    const fruits = ['mango','apple','orange','bananna']
    return(
        <div className="bg-gray-300 p-5 w-[30rem] ml-10 mt-4 shadow-lg">
            <ul className="text-center">
                {fruits.map((fruit, index) =>(
                    <li key={index}>{fruit}</li>
                ))}
            <h1>my fruit</h1>
            </ul>
        </div>
    )
}
export default Fruit;