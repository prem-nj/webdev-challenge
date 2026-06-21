// Get DOM elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginbtn');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');
const rememberCheckbox = document.getElementById('remember');
const togglePassword = document.getElementById('togglePassword');

// Function to validate the form
function validateForm() {
    let isValid = true;
    
    // Username validation
    if (usernameInput.value.trim() === '') {
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }
    
    // Password validation
    if (passwordInput.value.length < 6) {
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }
    
    // Enable/disable login button
    loginButton.disabled = !isValid;
    
    return isValid;
}

// Event listeners for real-time validation
usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

// Check for saved credentials on page load
window.addEventListener('DOMContentLoaded', () => {
    // Check if we have saved credentials
    const savedUsername = localStorage.getItem('instagram_username');
    const savedPassword = localStorage.getItem('instagram_password');
    
    if (savedUsername && savedPassword) {
        usernameInput.value = savedUsername;
        passwordInput.value = savedPassword;
        rememberCheckbox.checked = true;
        validateForm();
    }
});

// Handle login button click
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Final validation
    if (validateForm()) {
        // Simulate login process
        loginButton.textContent = "Logging in...";
        loginButton.disabled = true;
        
        // Save credentials if "Remember me" is checked
        if (rememberCheckbox.checked) {
            localStorage.setItem('instagram_username', usernameInput.value);
            localStorage.setItem('instagram_password', passwordInput.value);
        } else {
            localStorage.removeItem('instagram_username');
            localStorage.removeItem('instagram_password');
        }
        
        // Simulate API call delay
        setTimeout(() => {
            successMessage.style.display = 'block';
            loginButton.textContent = "Logged In";
            
            // Redirect after successful login (uncomment to enable)
            // setTimeout(() => {
            //     window.location.href = "dashboard.html";
            // }, 1500);
        }, 1500);
    }
});

// Show/hide password functionality
passwordInput.addEventListener('keyup', (e) => {
    // Press Shift + P to toggle password visibility
    if (e.shiftKey && e.key === 'P') {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    }
});

// Initialize form state
validateForm();
