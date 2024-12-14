import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () =>{

    const {user, setUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const logout = () =>{
        setUser(null);
        navigate('/login');
    }

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'cars'}>Technogeeks</Link>
                    <button className="navbar-toggler" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" aria-controls="navbarNav" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={'first'}>First</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'second'}>Second</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'table'}>Table</Link>
                            </li> */}

                            <li className="nav-item">
                                <Link className="nav-link" to={'api'}>Posts</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to={'user-list'}>Users</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to={'cars'}>Cars</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to={'about/company'}>About Us</Link>
                            </li>

                        </ul>

                        <div className='d-flex align-items-center gap-3'>
                            <h4 className='m-0'>{user && `Hello, ${user.user.first_name} ${user.user.last_name}`}</h4>
                            <ul className="navbar-nav">    
                                {
                                    user?.jwt && 
                                    <li className="nav-item">
                                        <button className="nav-link" onClick={logout}>Logout</button>
                                    </li>
                                }
                                {
                                    !user && <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'login'}>Login</Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'register'}>Register</Link>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>

                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;