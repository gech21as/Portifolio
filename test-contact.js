// Simple test to check contact endpoint
import fetch from 'node-fetch';

const testData = {
  email: 'test@example.com',
  message: 'This is a test message'
};

async function testContactEndpoint() {
  try {
    console.log('Testing contact endpoint...');
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData),
    });

    const data = await response.json();
    console.log('Response status:', response.status);
    console.log('Response data:', data);
  } catch (error) {
    console.error('Error:', error.message);
    console.log('Is the backend server running on port 5000?');
  }
}

testContactEndpoint();
