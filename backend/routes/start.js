const express = require('express');
const route = express.Router();

route.get('/greetings', (req, res)=>{
    res.send('Hello Good Morning!!');
})

route.get('/show-name', (req,res)=>{
    let nameObj = {
        first_name: 'Sarika',
        last_name: 'Mane'
    };
    res.json(nameObj);
})

module.exports = route;