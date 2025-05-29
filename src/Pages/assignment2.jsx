
import React, {useState} from "react";
const Numbercount = () =>{
    const [num, setNum] = useState(1)
    
    return(
        <div className="p-10 bg-gray-300 w-[32rem] mt-8 mb-8 flex gap-5">
            <button onClick={() => setNum( num +1)} className="p-2 bg-blue-700 text-white">increase</button>
            <p className="text-xl text-red-400">{num}</p>
            <button onClick={() => setNum(num -1)} className="p-2 bg-blue-700 text-white">Decrease</button>
        </div>
    )
}
export default Numbercount;