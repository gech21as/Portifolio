import dotenv from 'dotenv';
dotenv.config();

console.log('=== Gmail Credentials Check ===');
console.log('EMAIL_USER:', process.env.EMAIL_USER || '❌ NOT SET');
console.log('EMAIL_PASS length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : '❌ NOT SET');
console.log('');

// Check for common issues
if (process.env.EMAIL_USER) {
  if (process.env.EMAIL_USER.includes('@gmail.com')) {
    console.log('✅ Email format looks correct');
  } else {
    console.log('❌ Email should include @gmail.com');
  }
}

if (process.env.EMAIL_PASS) {
  if (process.env.EMAIL_PASS.length === 16) {
    console.log('✅ App password length looks correct (16 chars)');
  } else if (process.env.EMAIL_PASS.length < 16) {
    console.log('❌ Password too short - should be 16 characters for App Password');
  } else {
    console.log('⚠️  Password longer than 16 chars - might include extra spaces');
  }
  
  // Check for spaces
  if (process.env.EMAIL_PASS.includes(' ')) {
    console.log('ℹ️  Password contains spaces (this is normal for App Passwords)');
  }
}

console.log('');
console.log('If credentials are set, try this test:');
console.log('1. Make sure 2-factor authentication is enabled on your Google account');
console.log('2. Generate a new App Password from: https://myaccount.google.com/apppasswords');
console.log('3. Use the exact 16-character password (including spaces)');
