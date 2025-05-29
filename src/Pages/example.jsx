
import React, {useState} from "react";
import Workbtn from "../component/workbtn"





const Example = () =>{

    const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const handlesumit = (e) =>{
        e.preventDefault();
        alert(name)
     }


    return(
        <div className="bg-gray-200 w-[30rem]  p-2 mt-10 ml-10 shadow-lg">
             <p className="text-3xl">{name}</p>
             <button onClick={() => setName(name +1)} className="p-3 bg-green-700 text-amber-50">Add</button>
               

            <Workbtn display={' i am happy am understanding react'}text={'click me'}/>
             <form onSubmit={handlesumit} className="flex mt-5">
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <button className="bg-red-500 p-2 " type="submit">submit</button>
                </form>
        </div>
    )
}
export default Example;