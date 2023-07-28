const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Parse JSON requests
app.use(express.json());

// Handle form submission
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a transporter using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'your_email_service_provider',
      auth: {
        user: 'your_email',
        pass: 'your_password',
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'your_email',
      to: 'recipient_email',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.sendStatus(200);
  } catch (error) {
    console.error('Error sending email:', error);
    res.sendStatus(500);
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
