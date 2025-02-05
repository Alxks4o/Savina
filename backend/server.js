const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 3000

const app = express()

app.use(cors());
app.use(express.json());


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
});





app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})