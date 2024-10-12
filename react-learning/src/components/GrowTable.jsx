
import { useState } from 'react';
import '../css/GrowTable.css';

const GrowTable = () =>{
    let [tableData, setTableData] = useState([
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
        if(formData.srNo && formData.firstName && formData.lastName){
            setTableData([...tableData, formData]);
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
    
    return(
        <>
            <h3>Table</h3>

            <div className='flex-center'>
                <div>
                    <div className='form-container'>
                        <h3 className='h3'>Add New User Form</h3>
                        <form>
                            <div className='field-container'>
                                <label htmlFor="" className='label'>Sr No:</label>
                                <input
                                    className='input-element' 
                                    type="number" 
                                    name='srNo' 
                                    value={formData.srNo} 
                                    onChange={handleValueChange} />
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
                                    Add New User
                                </button>
                            </div>
                        </form>
                    </div>

                    <table className="grow-table">
                        <thead>
                            <tr className='tr'>
                                <th className='th'>Sr.No</th>
                                <th className='th'>First Name</th>
                                <th className='th'>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            tableData.map((tableRow, index)=>{
                                return(
                                    <tr className='tr' key={index}>
                                        <td className='td'>
                                            {tableRow.srNo}
                                        </td>
                                        <td className='td'>
                                            { tableRow.firstName}
                                        </td>
                                        <td className='td'>
                                            {tableRow.lastName}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>

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

        </>
    )
}

export default GrowTable;