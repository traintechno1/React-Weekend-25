import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () =>{
    const navigate = useNavigate();
    const [users, setUser]= useState([
        {
            id: 1,
            first_name: 'Swati',
            last_name: 'Patil',
            mobile: 9367572331,
            email: 'swati.p@gmail.com',
            address: 'Aundh, Pune'
        },
        {
            id: 2,
            first_name: 'Aman',
            last_name: 'Kumar',
            mobile: 9367572331,
            email: 'swati.p@gmail.com',
            address: 'Aundh, Pune'
        },
        {
            id: 3,
            first_name: 'Rishabh',
            last_name: 'Verma',
            mobile: 9367572331,
            email: 'swati.p@gmail.com',
            address: 'Aundh, Pune'
        },
        {
            id: 4,
            first_name: 'Ketan',
            last_name: 'Kulkarni',
            mobile: 9367572331,
            email: 'swati.p@gmail.com',
            address: 'Aundh, Pune'
        }
    ])

    const showUserDetails = (id, user)=>{        
        navigate(`/user-details/${id}/${user.first_name} ${user.last_name}`);
    }
    return(
        <>
            <h2>User List Component</h2>
            {
                users.map(user=>{
                    return(     
                        <div key={user.id}>
                            <label>Name: </label> <span>{user.first_name} {user.last_name}</span> <br/>
                            <label>Mobile: </label> <span>{user.mobile}</span><br/>
                            <label>Email: </label> <span>{user.email}</span><br/>
                            <label>Address: </label> <span>{user.address}</span><br/>
                            <button onClick={()=>showUserDetails(user.id, user)}>Show User Details</button>
                            <hr/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default UserList;