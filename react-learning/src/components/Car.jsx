import '../css/Car.css';
import { FaEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";

const Car = ({car, deleteClick, editClick}) => {

    const editCar = (carObj)=>{
        editClick(carObj);
    }

    const deleteCar = (carObj)=>{
        deleteClick(carObj)
    }

    return(
        <div className='car-box'>
            <div className='action-btns'>
                <button className="edit" onClick={() => editCar(car)}> <FaEdit /> </button> 
                <button className="delete" onClick={() => deleteCar(car)}> <BsTrash /></button>
            </div>
            <div className='details'>
                <label className='label'>Car Name:</label>
                {car.car_name}
            </div>
            <div className='details'>
                <label className='label'>Car Brand:</label>
                {car.brand}
            </div>
            <div className='details'>
                <label className='label'>Year Of Manufacturing:</label>
                {car.year}
            </div>
            <div className='details'>
                <label className='label'>Fuel Type:</label>
                {car.fuel_type}
            </div>
            <div className='details'>
                <label className='label'>Price:</label>
                {car.price}
            </div>
            <div className='details'>
                <label className='label'>Plate No:</label>
                {car.plate_no}
            </div>
        </div>
    )
}
export default Car;