const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/user-model.js')

const emailNotification = require('../emailNotification/email-service.js');

// middleware setup
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb://localhost:27017/Auth')

app.post('/api/register', async (req, res) => {
	// console.log(req.body) 
    // create entry in the database of the user
        console.log("reqbody: ",req.body);		
		const data = await User.create({
			firstName: req.body.firstName,
            lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
            gender: req.body.gender,
            country: req.body.country,
            checkbox: req.body.checkbox

		});
       emailNotification(req.body.email, req.body.firstName);
      console.log("email sent");
		return res.status(201).json({
            data: data,
            success: true,
            messange: "Successfully created a user in database",
            err: {}
        })
})

app.post('/api/login', async (req, res) => {
    console.log(req.body);
	const user = await User.findOne({
		email: req.body.email,
        password: req.body.password
	})
    //  console.log(user);
     res.json({
        user
     })
	
})

const PORT=process.env.PORT || 3005;
console.log(process.env.PORT)
app.listen(PORT, () => {
	console.log('Server started on 3005');
    // emailNotification('guptashiwang02@gmail.com');
});
