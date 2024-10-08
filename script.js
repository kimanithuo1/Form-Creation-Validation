document.addEventListener('DOMContentLoaded', function () {
    // Selecting the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Adding event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission to the server

        // Retrieving input values and trimming whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initializing validation variables
        let isValid = true;
        let messages = [];

        // Username validation: at least 3 characters long
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation: must contain "@" and "."
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation: at least 8 characters long
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Displaying feedback
        feedbackDiv.style.display = 'block'; // Make feedback visible
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join('<br>'); // Show error messages
            feedbackDiv.style.color = '#dc3545'; // Red color for errors
        }
    });
});
