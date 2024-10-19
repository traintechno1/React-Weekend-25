import { Link, Outlet } from "react-router-dom";
import "../css/About.css";

const About = () =>{
    return(
        <>
            <h2>About Us</h2>

            <div className="links-container">
                <Link to={'company'} className="link-items">About Company</Link>
                <Link to={'product'} className="link-items">About Products</Link>
                <Link to={'customer'} className="link-items">About Customer</Link>
            </div>

            <div className="outlet-container">
                <Outlet />
            </div>
        </>
    )
}
export default About;