import { useContext, useState } from "react"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export const Login = () =>{

    let {setUser} = useContext(AuthContext);

    let navigate = useNavigate();
    let loginObject = {
        email: '',
        password: ''
    }
    let [loginForm, setLoginForm] = useState(loginObject);

    const handleFormValueChange = (event) =>{
        const {name, value} = event.target;
        setLoginForm({
            ...loginForm, [name] : value
        })
    }

    const clearForm = (event) =>{
        event.preventDefault();
        setLoginForm(loginObject);
    }

    const loginUser = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:4040/auth/login', loginForm)
        .then(loginRes=>{
            setUser(loginRes.data);
            navigate('/cars');
        })
        .catch((errorRes)=>{
            console.log(errorRes);
            toast.error(`${errorRes.response.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        })
    }

    return(
        <>
            <div className="add-user-container">
                <h3 className="center-text">Login</h3> 
                <form>
                    <div className="field-holder">
                        <label className="form-label">Enter Email:</label>
                        <input 
                            className="fields"
                            type="text"
                            name="email"
                            value={loginForm.email}
                            onChange={handleFormValueChange}
                            placeholder="Enter Email"
                        />
                    </div>

                    <div className="field-holder">
                        <label className="form-label">Enter Password:</label>
                        <input 
                            className="fields"
                            type="password"
                            name="password"
                            value={loginForm.password}
                            onChange={handleFormValueChange}
                            placeholder="Enter Password"
                        />
                    </div>

                    <div className="btn-center btn-margin">
                        <button 
                            onClick={clearForm}
                            className="cancel-btn">
                            cancel
                        </button>
                        <button 
                            onClick={loginUser}
                            className="add-btn">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer/>
        </>
    )
}
