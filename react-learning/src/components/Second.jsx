import { useState } from "react";
import First from "./First";

const Second = () => {

    // normal JS variable but, on change of the value component will not gets reprinted.
    // let name = "ABC";


    // This is a state variable, on change in value component gets reprinted
    let [name, setName] = useState("ABC");

    // let changeName = (event) =>{
        // let value = event.target.value;
        // setName(value);
    //     setName(event.target.value);
    // }

    return(
        <>
            <h2>Second Heading</h2>
            {/* here we have called a method to change the value */}
            {/* <input type="text" onChange={(e) => changeName(e)} /> */}

            {/* here we have directly changed the value using set method of state variable */}
            <input 
                type="text" 
                onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <label>Name: {name}</label>
        </>
    )
}

export default Second;