import React from "react";
const Fruit = () =>{
    const fruits = ['mango', 'orange', 'apple', 'bannana']
    return(
        <div>
            <h1>my fruits</h1>
            <ul>
                {fruits.map((fruit, index) =>(
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}
export default Fruit;