const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const GreetingRoute = require('./routes/start');
const UserRoute = require('./routes/users');
const CarRoute = require('./routes/car');
const AuthRoute = require('./routes/authentication');


app.use(bodyParser.json());
app.use(cors());
app.use('', GreetingRoute);
app.use('/user', UserRoute);
app.use('/car', CarRoute);
app.use('/auth', AuthRoute);


mongoose.connect('mongodb://localhost:27017/React25')
.then(res=>{
    console.log("Connected to MongoDb Database");
}).catch(err=>{
    console.log("Connection Failed!");
})

let server = app.listen(4040, ()=>{
    let port = server.address().port;
    console.log(`server is running on port ${port} through nodemon`);
})