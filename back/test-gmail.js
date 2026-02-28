import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

async function testGmailConnection() {
  console.log('Testing Gmail connection...');
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('❌ Missing EMAIL_USER or EMAIL_PASS in .env file');
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Test the connection
    await transporter.verify();
    console.log('✅ Gmail connection successful! Your credentials work.');
    
    // Optional: Send a test email to yourself
    console.log('Sending test email...');
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: '📧 Test Email from Portfolio',
      text: 'This is a test email to verify your Gmail setup works for the contact form.',
    });
    console.log('✅ Test email sent successfully!');
    
  } catch (error) {
    console.log('❌ Gmail connection failed:');
    console.log('Error code:', error.code);
    console.log('Error message:', error.message);
    
    if (error.code === 'EAUTH') {
      console.log('');
      console.log('🔧 Fix steps:');
      console.log('1. Enable 2-factor authentication on your Google account');
      console.log('2. Go to: https://myaccount.google.com/apppasswords');
      console.log('3. Select "Mail" app and generate a new password');
      console.log('4. Use the exact 16-character password in your .env file');
    }
  }
}

testGmailConnection();
