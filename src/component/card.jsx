import React from "react";

const Card = ({product, brand, desc, price}) =>{
    return (
        <div className="bg-slate-100 relative w-fit p-3 rounded-xl">
            <p className="absolute top-2 left-2 text-sm p-1 rounded bg-red-200 text-red-900">{product}</p>
            <h2 className="mt-8 font-bold text-gray-800 text-xl">{brand}</h2>
            <p className="text-sm text-slate-500">{desc}</p>
            <p className="text-slate-400 ring-1 mt-4">{price}</p>
        </div>
    )
}

export default Card; 