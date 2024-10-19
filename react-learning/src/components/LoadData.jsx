import { useEffect, useState } from "react";

const LoadData = () =>{

    let [name, setName]= useState("Test User");
    let [count, setCount] = useState(1);

    // Effect -> for every side effect it gets executed

    // when the second parameter that is dependency array for the useEffect hook is an empty array
    // then that useEffect gets called only on initial load of the component only once.
    useEffect(()=>{
        console.log("useEffect gets called on initial load of the component!!")
    }, []);


    // This useEffect gets called on every change, initial load of the component
    useEffect(()=>{
        console.log("no parameter useEffect gets called");
    })

    // This useEffect gets called on change in count state variable
    useEffect(()=>{
        console.log("useEffect gets called on changing count value", count);
    }, [count]);

    // This useEffect gets called on change in name state variable
    useEffect(()=>{
        console.log("useEffect gets called on changing name current value is: ", name);
    }, [name]);

    const changeValue = () =>{
        setCount(count => count + 1);
    }

    const changeName = (event) =>{
        setName( event.target.value );
    }

    return(
        <>
            <h2>Loading data of {name} {count}...</h2>
            <input 
                type="text"
                name="name"
                onChange={changeName}
            />
            <button onClick={changeValue}>Increment Name count </button>
        </>
    )
}

export default LoadData;