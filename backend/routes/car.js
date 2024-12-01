const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    car_name: String,
    brand: String,
    year: Number,
    price: Number,
    fuel_type: String,
    plate_no: String
})

const CarModel = mongoose.model('car', CarSchema, 'car');

// http://localhost:4040/car
route.get('', (req, res)=>{
    CarModel.find().then(cars=>{
        let response = {
            list_of_cars: cars
        }
        res.json(response);
    })
})

// http://localhost:4040/car/67340b3f84ec6205b94dd9fc
route.get('/:id', (req, res)=>{
    let id = req.params.id;
    CarModel.findById(id).then(car=>{
        res.json(car);
    }).catch(error=>{
        res.json({
            message: `Car with ${id} not found`
        })
    })
})

// http://localhost:4040/car
route.post('', (req, res)=>{
    let body = req.body;
    let request = {
        car_name: body.car_name,
        brand: body.brand,
        year: body.year,
        price: body.price,
        fuel_type: body.fuel_type,
        plate_no: body.plate_no
    };
    
    let CarReq = new CarModel(request);

    CarReq.save().then(r=>{
        if(r._id){
            res.json({
                message: 'Car Added Successfully',
                data: r
            });
        }
    }).catch(e=>{
        console.log(e);
    })
})

// http://localhost:4040/car/67340b3f84ec6205b94dd9fc
route.delete('/:id', (req, res)=>{
    let id = req.params.id;
    CarModel.findByIdAndDelete(id).then(r=>{
        res.json({
            message: `car deleted successfully`
        })
    }).catch(e=>{
        res.json(e);
    })
})


route.put('', (req, res)=>{
    let body = req.body;
    let id = req.body._id;
    let request = {
        car_name: body.car_name,
        brand: body.brand,
        year: body.year,
        price: body.price,
        fuel_type: body.fuel_type,
        plate_no: body.plate_no
    };

    CarModel.findByIdAndUpdate(id, request)
        .then(r=>{
            res.json({
                message: `Car Updated Successfully`
            })
        }).catch(e=>{
            res.json(e);
        })
})

module.exports = route;