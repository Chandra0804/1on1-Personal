const express = require('express');
const multer = require('multer');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors);
const port = 5001;

// Configure Multer to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Configure Nodemailer to send emails
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'thanushsetty293@gmail.com',
        pass: 'sonU293@$',
    },
});

// Define the API endpoint for receiving resumes
app.post('/sendResume', upload.single('resume'), async (req, res) => {
    try {
        const resumeFile = req.file.buffer;

        // Compose the email
        const mailOptions = {
            from: 'thanushsetty293@gmail.com',
            to: 'chandrasaiteja0804@gmail.com',
            subject: 'New Resume Attachment',
            text: 'A new resume has been received.',
            attachments: [{ filename: 'resume.pdf', content: resumeFile }],
        };

        // Send the email to your company's email address
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Resume sent successfully to your company.' });
    } catch (error) {
        console.error('Error sending resume to your company', error);
        res.status(500).json({ error: 'An error occurred while sending the resume to your company.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
