import React from "react";
import Prac from "../component/praccomponent";
const Challen = () =>{
    const customers = [
        {id:1, name:"series", email:"patrick@gmail.com", phone:"08061533994",reg:"00-56-4"},
        {id:2, name:"godwin", email:"godwin@gmail.com", phone:"08045443422",reg:"00-34-5"},
        {id:3, name:"tumal", email:"tumal@gmail.com",phone:"09064533224",reg:"00-34-5"},
        {id:4, name:"paul", email:"paul@gmail.com", phone:"07045342345",reg:"00-78-9"},
        {id:5, name:"tony", email:"tony@gmail.com", phone:"08056544432", reg:"00-54-2"}
    ]
    return(
        <div className="flex">
            {customers.map((customer) =>(
                <Prac key={customer.id} name={customer.name} email={customer.email} phone={customer.phone} reg={customer.reg}/>
            ))}
            
        </div>
    )
}
export default Challen;