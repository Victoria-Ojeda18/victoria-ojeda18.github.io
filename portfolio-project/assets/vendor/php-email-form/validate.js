// This file contains JavaScript for validating email forms.
// It ensures that the email input is in the correct format and provides feedback to the user.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.php-email-form');
    const emailInput = form.querySelector('input[type="email"]');
    const submitButton = form.querySelector('button[type="submit"]');
    const responseMessage = document.createElement('div');
    responseMessage.classList.add('response-message');
    form.appendChild(responseMessage);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailValue = emailInput.value;

        if (validateEmail(emailValue)) {
            responseMessage.textContent = 'Email is valid!';
            responseMessage.style.color = 'green';
            // Here you can add the code to send the form data to the server
        } else {
            responseMessage.textContent = 'Please enter a valid email address.';
            responseMessage.style.color = 'red';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});