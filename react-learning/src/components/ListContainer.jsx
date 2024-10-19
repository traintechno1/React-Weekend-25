import { useState } from "react";
import ListItem from "./ListItem";

const ListContainer = () =>{
    let [users, setUsers] = useState([
        {
            firstName: 'Bhavika',
            lastName: 'Khairnar',
            email: 'bhavika@gmail.com',
            isActive: false
        },
        {
            firstName: 'Akash',
            lastName: 'Lakabhshetti',
            email: 'akash@gmail.com',
            isActive: true
        },
        {
            firstName: 'Viraj',
            lastName: 'Shete',
            email: 'viraj@gmail.com',
            isActive: false
        }
    ]);
    
    const toggleStatus = (incomingUser) => {
        console.log(incomingUser);
        setUsers((prevUser)=>
             prevUser.map(user=>{
                if(user.email === incomingUser.email){
                    console.log('matched user', user);
                    return { ...user, isActive: !user.isActive}
                }
                else{
                    return user;
                }
            })
        )
    }

    return(
        <>
            <h4>List Container</h4>
            {
                users?.map((user, index)=>{
                    return  <ListItem 
                        key={index} 
                        user={user} 
                        isUserActive={user.isActive} 
                        toggleActiveStatus={()=>toggleStatus(user)}
                    />
                })
            }
        </>
    )
}
export default ListContainer;