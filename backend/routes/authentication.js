const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    mobile: Number,
    gender: String
})

const UserModel = mongoose.model('users', UserSchema, 'users');

route.post('/register', (req, res)=>{
    let userReq = req.body;
    const newUser = new UserModel(userReq);
    newUser.save().then(user=>{
        if(user._id){
            res.json({
                message: 'User Created Successfully',
                id: user._id
            })
        }else{
            res.json({
                message: 'Something went wrong, please try again later',
            })
        }
    })
})

route.post('/login', (req, res)=>{
    let loginReq = req.body;
    UserModel.findOne({email:loginReq.email})
    .then(user=>{
        if(user){
            if(user.password == loginReq.password){
                let jwtToken = jwt.sign({signature: user._id}, '87*^&98hgg8&*');
                res.status(200).json({
                    message: 'Login Successful',
                    jwt: jwtToken,
                    user: user
                })
            }else{
                res.status(400).json({
                    message: 'Password is not matching'
                })
            }
        }else{
            res.status(400).json({
                message: `User With Email ${loginReq.email} not found`,
            })
        }
    })

   
})

module.exports = route;