
import '../css/ListItem.css';

const ListItem = ({user, isUserActive, toggleActiveStatus}) =>{

    return(
        <>
            <div 
                onClick={()=>toggleActiveStatus(user)}
                style={{
                    padding: '20px',
                    border: '1px solid gray',
                    width: '250px',
                    marginBottom: '20px'
                }}
                className={isUserActive ? 'active': 'inactive'}
                >
                <label style={{fontWeight: 600}}>User Name</label>: 
                    {user.firstName + " " + user.lastName} <br/>
                <label style={{fontWeight: 600}}>Email</label>: 
                    {user.email} <br/>
                <label style={{fontWeight: 600}}>Is Active</label>: 
                    {isUserActive ? 'true' : 'false'} <br/>
            </div>  
        </>
    )
}
export default ListItem; 