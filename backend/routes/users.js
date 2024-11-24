const express = require('express');
const route = express.Router();

let listOfUsers = [
    {
        id: 1,
        first_name: 'Viraj',
        last_name: 'Shete',
        email: 'viraj@gmail.com'
    },
    {
        id: 2,
        first_name: 'Pavan',
        last_name: 'Ghuge',
        email: 'pavan@gmail.com'
    },
    {
        id: 3,
        first_name: 'Sarika',
        last_name: 'Mane',
        email: 'sarika@gmail.com'
    },
    {
        id: 4,
        first_name: 'Damini',
        last_name: 'Walke',
        email: 'damini@gmail.com'
    }
];

route.get('/userWithQuery', (req, res)=>{
    let user_id = req.query.user_id;
    const user = listOfUsers.find(user=> user.id == user_id);
    res.json(user);
})

route.get('/all', (req, res)=>{
    const response = {
        user: listOfUsers
    }
    res.json(response);
})

route.get('/:user_id', (req, res)=>{
   const user_id = +req.params.user_id;
   const user = listOfUsers.find(user=> user.id === user_id);
   res.json(user || {
    message: `User with Id: ${user_id} not exists`
   });
})

route.post('/add', (req, res)=>{
    const reqBody = req.body;
    const id = reqBody.id;

    let user = listOfUsers.find(u=> u.id == id);

    if(!user){
        listOfUsers.push(reqBody);
        res.json({
            message: 'User Added Successfully',
            data: listOfUsers
        })
    }
    else{
        res.json({
            message: `User with id: ${id} already exists`,
            data: user
        })
    }
})

route.delete('/:user_id', (req, res)=>{
    const user_id = req.params.user_id;
    
    const userIndex = listOfUsers.findIndex(u=> u.id == user_id);

    if(userIndex == -1){
        res.json({
            message: `User with id :${user_id} does not exists`
        })
    }
    else if(userIndex >= 0){
        listOfUsers.splice(userIndex, 1);
        res.json({
            message: `User with id :${user_id} deleted Successfully`
        })
    }
})

module.exports = route;