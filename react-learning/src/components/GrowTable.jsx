
import { useState } from 'react';
import UpdateIcon from '../assets/images/update-icon.png';
import '../css/GrowTable.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GrowTable = () =>{
    let [userData, setUserData] = useState([
        {
            srNo: 101,
            firstName: 'Pavan',
            lastName: 'Ghuge'
        },
        {
            srNo: 102,
            firstName: 'Bhavika',
            lastName: 'Khairnar'
        },
        {
            srNo: 103,
            firstName: 'Sarika',
            lastName: 'Mane'
        },
        {
            srNo: 104,
            firstName: 'Akash',
            lastName: 'Lakabshetti'
        },
    ]);

    const [isInEditMode, setIsInEditMode] = useState(false);

    const [books, setBooks] = useState(
        [
            {
                bookId: 10001,
                title: 'Let Us C',
                price: 250,
                noOfPages: 230,
                author: 'Yeshwant Kanetkar'
            },
            {
                bookId: 10002,
                title: 'Let Us C++',
                price: 300,
                noOfPages: 372,
                author: 'Yeshwant Kanetkar'
            },
            {
                bookId: 10003,
                title: 'Clean Code',
                price: 1200,
                noOfPages: 750,
                author: 'John Wick'
            }
        ]
    )

    const [formData, setFormData] = useState({
        srNo: '',
        firstName: '',
        lastName: ''
    });

    const addUser = (event) =>{
        event.preventDefault();
        console.log(formData);
        if(formData.srNo && formData.firstName && formData.lastName){
            if(isInEditMode){
                // Edit Existing User case
                let updateUser = {
                    srNo: formData.srNo,
                    firstName : formData.firstName,
                    lastName: formData.lastName
                }
                setUserData((prevUsers)=>
                    prevUsers.map(user=>{
                        if(user.srNo === formData.srNo){
                            return { ...user, ...updateUser }
                        }
                        else{
                            return user;
                        }
                    })
                )
                setIsInEditMode(false);
            }
            else{
                // Add New user case


                // to check whether sr no is unique

                let srNo = +formData.srNo;

                let userIndex = userData.findIndex(user=> +user.srNo === srNo);
                console.log(userIndex);
                if(userIndex === -1 ){
                    setUserData([...userData, formData]);
                }
                else{
                    toast.error(`User with ${formData.srNo} already exist`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    return;
                }
            }
            setFormData({
                srNo: '',
                firstName: '',
                lastName: ''
            })
        }
    }

    const handleValueChange = (event) =>{
        let { name, value } = event.target;
        setFormData({
            ...formData, [name] : value
        })
    }

    const updateUser = (user) =>{
        setIsInEditMode(true);
        setFormData(user);
    }
    
    return(
        <>
            <h3>Table</h3>
            <div className='flex-center'>
                {/* User Section */}
                <div>

                    {/* Add User Form */}
                    <div className='form-container'>
                        <h3 className='h3'>{isInEditMode ? 'Edit' : 'Add New'} User Form</h3>
                        <form>
                            <div className='field-container'>
                                <label htmlFor="" className='label'>Sr No:</label>
                                <input
                                    className='input-element' 
                                    type="number" 
                                    name='srNo' 
                                    value={formData.srNo} 
                                    onChange={handleValueChange}
                                    readOnly={isInEditMode}
                                />
                            </div>

                            <div className='field-container'>
                                <label htmlFor="" className='label'>First Name:</label>
                                <input
                                    className='input-element' 
                                    type="text" 
                                    name='firstName' 
                                    value={formData.firstName} 
                                    onChange={handleValueChange} />
                            </div>

                            <div className='field-container'>
                                <label htmlFor="" className='label'>Last Name:</label>
                                <input
                                    className='input-element' 
                                    type="text" 
                                    name='lastName' 
                                    value={formData.lastName} 
                                    onChange={handleValueChange}/>
                            </div>

                            <div className='flex-center'>
                                <button onClick={addUser} className='add-btn'>
                                    {isInEditMode ? 'Edit' : 'Add New'} User
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    {/* User Details Table */}

                    <table className="grow-table">
                        <thead>
                            <tr className='tr'>
                                <th className='th'>Sr.No</th>
                                <th className='th'>First Name</th>
                                <th className='th'>Last Name</th>
                                <th className='th'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            userData.map((user, index)=>{
                                return(
                                    <tr className='tr' key={index}>
                                        <td className='td'>
                                            {user.srNo}
                                        </td>
                                        <td className='td'>
                                            { user.firstName}
                                        </td>
                                        <td className='td'>
                                            {user.lastName}
                                        </td>
                                        <td className='flex-center update-btn-cell'>
                                            <button className='update-btn' onClick={()=> updateUser(user)}>
                                                <img src={UpdateIcon} alt="Update Icon" className='update-icon' />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>

                {/* Book Details Table */}
                <table className="grow-table">
                    <thead>
                        <tr className='tr'>
                            <th className='th'>Book Id</th>
                            <th className='th'>Title</th>
                            <th className='th'>Author</th>
                            <th className='th'>No Of Pages</th>
                            <th className='th'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index)=>{
                                return(
                                    <tr className='tr' key={index}>
                                        <td className='td'>
                                            {book.bookId}
                                        </td>
                                        <td className='td'>
                                            { book.title}
                                        </td>
                                        <td className='td'>
                                            {book.author}
                                        </td>
                                        <td className='td'>
                                            {book.noOfPages}
                                        </td>
                                        <td className='td'>
                                            {book.price}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            {/* <ul>
                {
                    books.map(book=>{
                        return <li>{book.title}</li>
                    })
                }
            </ul> */}

            <ToastContainer />

        </>
    )
}

export default GrowTable;