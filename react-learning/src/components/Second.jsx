import { useState } from "react";
import First from "./First";

const Second = () => {
    // let name = "ABC";
    let [name, setName] = useState("ABC");

    // let changeName = (event) =>{
        // let value = event.target.value;
        // setName(value);
    //     setName(event.target.value);
    // }

    return(
        <>
            <h2>Second Heading</h2>
            {/* <input type="text" onChange={(e) => changeName(e)} /> */}
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <br />
            <label>Name: {name}</label>
            <h1>{name}</h1>
            <h2>{name}</h2>
            <h3>{name}</h3>
            <h4>{name}</h4>
            <h5>{name}</h5>
        </>
    )
}

export default Second;