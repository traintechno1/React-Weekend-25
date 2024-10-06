// function returnValue(){
//     return 300;
// }

import { useState } from "react";

function First(){
    let name = 'Tanvi Pawar';
    // let number = 10;

    let [number, setNumber] = useState(1);
    
    let incrementNumber = () =>{
        setNumber(num => num + 2);
        // number= number + 1;
        // console.log(number);
    }
    return(
        <>
            <h1>Hello, Good Morning {name} </h1>
            <button onClick={incrementNumber}>click me</button>
            <h2>{number}</h2>
            <h3>Printing Number: {number}</h3>
            <hr />
        </>
    )
}

export default First;
