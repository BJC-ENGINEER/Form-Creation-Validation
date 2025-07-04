document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', function (event) {
event.preventDefault(); // Stop form from submitting

// Get input values and trim whitespace
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

// Initialize validation
let isValid = true;
let messages = [];

// Username: must be at least 3 characters
if (username.length < 3) {
isValid = false;
messages.push('Username must be at least 3 characters long.');
}

// Email: must include "@" and "."
if (!email.includes('@') || !email.includes('.')) {
isValid = false;
messages.push('Email must include "@" and "."');
}

// Password: must be at least 8 characters
if (password.length < 8) {
isValid = false;
messages.push('Password must be at least 8 characters long.');
}

// Show feedback
feedbackDiv.style.display = 'block';

if (isValid) {
feedbackDiv.textContent = 'Registration successful!';
feedbackDiv.style.color = '#28a745'; // green
feedbackDiv.style.backgroundColor = '#d4edda'; // light green
} else {
feedbackDiv.innerHTML = messages.join('<br>');
feedbackDiv.style.color = '#dc3545'; // red
feedbackDiv.style.backgroundColor = '#f8d7da'; // light red
}
});
});