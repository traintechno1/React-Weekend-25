import { useEffect } from "react";
import { useParams } from "react-router-dom";

const userDetails = () =>{
    const { id , name } = useParams();
    useEffect(()=>{
        console.log(id, name);
        // here I will call an API with {id} to get user details

        // use the details form to show the user data
    }, [])
    return(
        <>  
            <h2>User Details Component</h2>
            <i>id</i> : <u>{id}</u> , <i>name</i>: <u>{name}</u>
        </>
    )
}

export default userDetails;