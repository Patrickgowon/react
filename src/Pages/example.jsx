
import React from "react";
import Workbtn from "../component/workbtn"
const Example = () =>{
    return(
        <div className="bg-gray-200 w-[30rem] h-[10rem] p-2 mt-10 ml-10 shadow-lg">
            <p>This is my work test</p>
            <Workbtn display={' i am happy am understanding react'}text={'click me'}/>
        </div>
    )
}
export default Example;