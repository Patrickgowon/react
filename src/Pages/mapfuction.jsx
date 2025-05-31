import React from "react";
const Mapfunc = () =>{
    const cars = ['honda', 'toyota', 'benz']
    return(
        <div>
            <h2>My cars</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>{car}</li>
                ))}
                
            </ul>
        </div>
    )
}
export default Mapfunc;