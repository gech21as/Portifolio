import dotenv from 'dotenv';
dotenv.config();

console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'SET' : 'NOT SET');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'SET' : 'NOT SET');

if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  console.log('✅ Environment variables are loaded');
} else {
  console.log('❌ Environment variables are missing');
}
