import React from "react";
import Card from "../component/card";
const Challenge = () =>{
    const protucts = [
        {id:1,name:"laptop", price:150, brand:'Toshiba', description:"laptop very strong and affordable"},
        {id:2, name:"phone", price:200, brand:'Redmi', description:"this is a redmi phone very good and strong"},
        {id:3, name:"drummz", price:300, brand:'Yamaha', description:"this is a yahama drumx one of the best"}
    ]

    return(
        <div className="bg-gray-400 mt-10 text-center p-10">
            <h1>challenge fron my boss</h1>
            <p className="text-white">welcome to my ecommerce website were we sell all kind of good</p>
            <ul className="text-green-300 flex gap-2">
                {protucts.map((product) =>(
                   <Card key={product.id} price={product.price} product={product.name} desc={product.description} brand={product.brand} />
                ))}

            </ul>
                
        </div>
    )
}
export default Challenge