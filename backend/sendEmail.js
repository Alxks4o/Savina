const express = require('express');
const router = express.Router();
require('dotenv').config();
const nodemailer = require('nodemailer');

// Get email credentials from environment variables
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS

// Create Nodemailer transporter object for sending emails
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: user,
        pass: pass
    }
});

// Function to send email using Nodemailer
async function sendMail(user_email, name, htmlMessage) {
    try {
        const info = await transporter.sendMail({
            to: user, 
            subject: `From ${user_email}`, 
            html: `${name} ${htmlMessage}`,
            replyTo: user_email
        });

        console.log("Email sent:", info.response);
        return { success: true, message: 'Email sent successfully!' };
    } catch (err) {
        console.error("Error sending mail:", err.message);
        return { success: false, message: err.message };
    }
}

// Define an API route to send email
router.post('/send-email', async (req, res) => {
    try {
        const { user_email , user_name, message } = req.body; 
        const htmlMessage = `<p>${message}</p>`;
        const name = `<h2>${user_name} says:</h2>`;
        const result = await sendMail(user_email, name, htmlMessage); 

        res.status(result.success ? 200 : 500).json({ message: result.message });
    } catch (err) {
        console.error("Error in /send-email route:", err.message);
        res.status(500).json({ message: 'An error occurred while processing the request.' });
    }
});

module.exports = router;
