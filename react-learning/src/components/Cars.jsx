import axios from "axios";
import { useEffect, useState } from "react";
import Car from "./Car";

import '../css/Cars.css';
import { ToastContainer, toast } from "react-toastify";


const Cars = () =>{

    let [cars, setCars] = useState([]);

    let initialCarObject = {
        _id: '',
        car_name: '',
        brand: '',
        year: '',
        price: '',
        fuel_type: '',
        plate_no: ''
    }

    let [carForm , setCarForm] = useState(initialCarObject)

    const handleFormValueChange = (event) =>{
        const {name, value} = event.target;
        setCarForm({
            ...carForm, [name] : value
        })
    }

    useEffect(()=>{
        getCarsData();
    }, []);

    const getCarsData = () =>{
        axios.get('http://localhost:4040/car')
        .then(res=>{
            let listOfCars = res.data.list_of_cars;
            setCars(listOfCars);
        })
    }

    const clearForm = (event)=> {
        event.preventDefault();
        setCarForm(initialCarObject);
    }

    const AddEditCar = (event) =>{
        event.preventDefault();
        if(carForm._id){
            //call edit API
            axios.put('http://localhost:4040/car', carForm)
            .then(res=>{
                toast.success(`${res.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setCarForm(initialCarObject);
                getCarsData();
            })
            .catch(error=>{
                toast.error(`Car Addition Failed, Please Contact Support`, {
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
        else{
            // call Add API
            axios.post('http://localhost:4040/car', carForm)
            .then(res=>{
                toast.success(`${res.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setCarForm(initialCarObject);
                getCarsData();
            })
            .catch(error=>{
                toast.error(`Car Addition Failed, Please Contact Support`, {
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
    } 

    const deleteCar = (data) =>{
        data._id && axios.delete(`http://localhost:4040/car/${data._id}`)
            .then(res=>{
                toast.success(`${res.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }); 
                getCarsData();               
            })
            .catch(error=>{
                toast.error(`Car Deletion Failed, Please Contact Support`, {
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

    const editCar = (data) =>{
        setCarForm({
            _id: data._id,
            car_name: data.car_name,
            brand: data.brand,
            year: data.year,
            price: data.price,
            fuel_type: data.fuel_type,
            plate_no: data.plate_no
        });
    }

    return(
        <>  
            <h3> Available Cars </h3> 
            <div className="car-container">
                {
                    cars.map(car=>{
                        return <Car 
                            key={car._id} 
                            car={car}
                            deleteClick={deleteCar}
                            editClick={editCar}
                        >
                        </Car>
                    })
                }
            </div>

            <hr />

            <div className="add-car-container">

                <h5 className="heading">{carForm._id ? 'Edit': 'Add'} Car</h5>
                <form>
                    <div className="field-holder">
                        <label className="form-label">Car Name:</label>
                        <input 
                            className="fields"
                            type="text"
                            name="car_name"
                            value={carForm.car_name}
                            onChange={handleFormValueChange}
                            placeholder="Car Name"
                        />
                    </div>

                    <div className="field-holder">
                        <label className="form-label">Car Brand:</label>
                        <input 
                            className="fields"
                            type="text"
                            name="brand"
                            value={carForm.brand}
                            onChange={handleFormValueChange}
                            placeholder="Car Brand"
                        />
                    </div>

                    <div className="field-holder">
                        <label className="form-label">Year Of Manufacturing:</label>
                        <input 
                            className="fields"
                            type="number"
                            name="year"
                            value={carForm.year}
                            onChange={handleFormValueChange}
                            placeholder="Year Of Manufacturing"
                        />
                    </div>

                    <div className="field-holder">
                        <label className="form-label">Fuel Type:</label>
                        <input 
                            className="fields"
                            type="text"
                            name="fuel_type"
                            value={carForm.fuel_type}
                            onChange={handleFormValueChange}
                            placeholder="Fuel Type"
                        />
                    </div>

                    <div className="field-holder">
                        <label className="form-label">Price:</label>
                        <input 
                            className="fields"
                            type="text"
                            name="price"
                            value={carForm.price}
                            onChange={handleFormValueChange}
                            placeholder="Price"
                        />
                    </div>

                    <div className="field-holder">
                        <label className="form-label">Plate No:</label>
                        <input 
                            className="fields"
                            type="text"
                            name="plate_no"
                            value={carForm.plate_no}
                            onChange={handleFormValueChange}
                            placeholder="Plate No"
                        />
                    </div>

                    <div className="btn-center">
                        <button className="cancel-btn" onClick={clearForm}>cancel</button>
                        <button className="add-btn" onClick={AddEditCar}>{carForm._id ? 'Edit': 'Add'} Car</button>
                    </div>                    
                </form>

            </div>

            <ToastContainer />
        </>
    )
}
export default Cars;
