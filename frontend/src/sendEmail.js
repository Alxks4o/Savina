require('dotenv').config(); // Load environment variables
const nodemailer = require('nodemailer');

// Get credentials from environment variables
const user = process.env.EMAIL_USER; 
const pass = process.env.EMAIL_PASS; 

// Create transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: user,
        pass: pass 
    }
});

// Define email parameters
const sender_email = user; // Use the environment variable for consistency
const subject = "Random";
const message = "Random message";

// Email sending function
async function sendMail(to, subject, htmlMessage) {
    try {
        const info = await transporter.sendMail({
            from: sender_email,
            to: to,             
            subject: subject,      
            html: htmlMessage        
        });
        console.log("Email sent:", info.response);
    } catch (err) {
        console.error("Error sending mail:", err.message); // Avoid exposing sensitive information
        if (err.response) {
            console.error("Error response:", err.response);
        }
    }
}

// Example call to sendMail
sendMail(user, subject, `<p>${message}</p>`);
