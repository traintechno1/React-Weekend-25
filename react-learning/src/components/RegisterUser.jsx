
import { useState } from "react";
import "../css/Register.css";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
export const RegisterUser = () =>{

    let initialUserObject = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        mobile: '',
        gender: ''
    };

    let [userForm , setUserForm] = useState(initialUserObject);

    const handleFormValueChange = (event) =>{
        const {name, value} = event.target;
        // this part will only gets executed when the field is password
        setUserForm({
                ...userForm,
                [name] : value,
                ...(name === 'password' && !value ? {confirm_password: ''}: {})
        });
    }

    const clearForm = (event) =>{
        event.preventDefault();
        setUserForm(initialUserObject);
    }

    const registerUser = (event) =>{
        event.preventDefault();
        let resigterReq = userForm;
        delete resigterReq.confirm_password;
        axios.post('http://localhost:4040/auth/register', resigterReq)
        .then(registerRes=>{
            if(registerRes.status === 200){
                toast.success(`${registerRes.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setUserForm(initialUserObject);
            }
        })
    }

    return (
        <>
            <div className="add-user-container">
                <h3 className="center-text">Register User</h3>
                <form>
                    <div className="field-holder">
                        <label className="form-label">First Name:</label>
                        <input 
                            className="fields"
                            type="text"
                            name="first_name"
                            value={userForm.first_name}
                            onChange={handleFormValueChange}
                            placeholder="First Name"
                        />
                    </div>

                    <div className="field-holder">
                        <label className="form-label">Last Name:</label>
                        <input 
                            className="fields"
                            type="text"
                            name="last_name"
                            value={userForm.last_name}
                            onChange={handleFormValueChange}
                            placeholder="Last Name"
                        />
                    </div>

                    <div className="field-holder">
                        <label className="form-label">Email:</label>
                        <input 
                            className="fields"
                            type="text"
                            name="email"
                            value={userForm.email}
                            onChange={handleFormValueChange}
                            placeholder="email"
                        />
                    </div>

                    <div className="field-holder">
                        <label className="form-label">Password:</label>
                        <input 
                            className="fields"
                            type="password"
                            name="password"
                            value={userForm.password}
                            onChange={handleFormValueChange}
                            placeholder="Password"
                        />
                    </div>

                    <div className="field-holder">
                        <label className="form-label">Confirm Password:</label>
                        <input 
                            className="fields"
                            type="password"
                            name="confirm_password"
                            disabled={!userForm.password}
                            value={userForm.confirm_password}
                            onChange={handleFormValueChange}
                            placeholder="Confirm password"
                        />
                    </div>

                    <div className="field-holder">
                        <label className="form-label">Mobile:</label>
                        <input 
                            className="fields"
                            type="number"
                            name="mobile"
                            value={userForm.mobile}
                            onChange={handleFormValueChange}
                            placeholder="Mobile"
                        />
                    </div>

                    <div className="field-holder">
                        <label className="form-label">Gender:</label>
                        <div className="radio-group">
                            <div className="radio-input">
                                <input
                                    id="male" 
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    onChange={handleFormValueChange}
                                />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className="radio-input">
                                <input
                                    id="female" 
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    onChange={handleFormValueChange}
                                />
                                <label htmlFor="female">Female</label>
                            </div>

                            <div className="radio-input">
                                <input
                                    id="other" 
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    onChange={handleFormValueChange}
                                />
                                <label htmlFor="other">Other</label>
                            </div>

                        </div>
                    </div>

                    <div className="btn-center btn-margin">
                        <button 
                            onClick={clearForm}
                            className="cancel-btn">
                            cancel
                        </button>
                        <button 
                            onClick={registerUser}
                            className="add-btn">
                            Register
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )

}