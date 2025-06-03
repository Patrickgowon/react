import React from "react";
import Ecom from "../component/ecomerce";
const Chall = () =>{
    const products = [
        {id:1, name:"Laptop", brand:"Toshiba", price:200, desc:"very affordable laptop and strong"},
        {id:2, name:"phone", brand:"Redmi", price:500, desc:"one of the strongest phone in the whole world"},
        {id:3, name:"instrument", brand:"bass guiter", price:300, desc:"this is a very strong drums from yahama is blue in nature"}
    ]
    return(
        <div className="flex gap-4">
            {products.map((product) =>(
              <Ecom key={product.id} name={product.name} price={product.price}disc={product.desc}brand={product.brand}/>  
            ))}   
        </div>
    )
}
export default Chall;