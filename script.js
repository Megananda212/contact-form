console.log("JavaScript terhubung dengan HTML.");

// Tangkap elemen-elemen
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('success-message');
const errorMessages = {
    name: document.getElementById('error-name'),
    email: document.getElementById('error-email'),
    message: document.getElementById('error-message'),
};

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function showError(input, message) {
    console.log(`Error pada ${input}: ${message}`);
    const errorElement = errorMessages[input];
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(input) {
    const errorElement = errorMessages[input];
    errorElement.style.display = 'none';
}

function handleFormSubmit(event) {
    event.preventDefault();

    hideError('name');
    hideError('email');
    hideError('message');
    successMessage.style.display = 'none';

    let isValid = true;

    if (nameInput.value.trim() === '') {
        showError('name', 'Nama wajib diisi');
        isValid = false;
    }

    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        showError('email', 'Email wajib diisi');
        isValid = false;
    } else if (!validateEmail(emailValue)) {
        showError('email', 'Alamat email tidak valid');
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        showError('message', 'Pesan wajib diisi');
        isValid = false;
    }

    if (isValid) {
        successMessage.style.display = 'block';
        form.reset();
    }
}

form.addEventListener('submit', handleFormSubmit);
