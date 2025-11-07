// Task 5: Email Sender using Nodemailer
// This version is safe for GitHub - no personal credentials

const nodemailer = require('nodemailer');

// Create transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Email options
const mailOptions = {
  from: process.env.EMAIL_USER || 'your-email@gmail.com',
  to: process.env.EMAIL_RECIPIENT || 'recipient@example.com',
  subject: 'Test Email from Node.js Checkpoint',
  text: 'Hello! This is a test email sent from Node.js using Nodemailer.',
  html: `
    <h1>Hello from Node.js!</h1>
    <p>This is a test email sent using <strong>Nodemailer</strong>.</p>
    <p>Node.js Checkpoint - Task 5</p>
  `
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('❌ Error sending email:');
    console.log(error);
  } else {
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
  }
});


 