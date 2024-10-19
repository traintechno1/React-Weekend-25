import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Technogeeks</a>
                    <button className="navbar-toggler" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" aria-controls="navbarNav" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'first'}>First</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'second'}>Second</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'table'}>Table</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'about'}>About Us</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;