const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

function emailNotification(email,name){
    console.log(email);
    console.log(process.env.EMAIL_ID);
    console.log(process.env.EMAIL_PASS);
    
    // via gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ID,  
            pass: process.env.EMAIL_PASS
        }
    });

    // via ethereal email

    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     auth: {
    //         user: 'annamae.mitchell@ethereal.email',
    //         pass: '1FuGJ9JyGYu5DHKZMW'
    //     }
    // });

    const mailOptions = {
        from: 'guptamunnu02@gmail.com',
        to: [email], // we can include multiple email addresses in an array
        subject: 'Registration Confirmation Email',
        html: '<h1>Welcome to our website '+name+'</h1> <p>We are excited to have you as part of our community.</p> <footer> <p>If you did not register for our service please ignore this email.</p><p>Regards,</p><p>Shiwang</p></footer>'
    };

    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = emailNotification;
 
// Path: server\emailNotification\email-service.js
   