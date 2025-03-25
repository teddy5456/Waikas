document.addEventListener('DOMContentLoaded', function() {
    // Login Form Validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Basic validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send data to your backend
            console.log('Login attempt with:', { email, password });
            
            // For demo purposes, redirect to dashboard
            window.location.href = '../dashboard.html'; // We'll create this later
        });
    }
    
    // Registration Form Validation
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const passwordMatch = document.getElementById('passwordMatch');
        
        // Password strength checker
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let strength = 0;
            
            // Check password length
            if (password.length >= 8) {
                strength += 25;
                document.getElementById('lengthHint').classList.add('valid');
            } else {
                document.getElementById('lengthHint').classList.remove('valid');
            }
            
            // Check for uppercase letters
            if (/[A-Z]/.test(password)) {
                strength += 25;
                document.getElementById('uppercaseHint').classList.add('valid');
            } else {
                document.getElementById('uppercaseHint').classList.remove('valid');
            }
            
            // Check for numbers
            if (/[0-9]/.test(password)) {
                strength += 25;
                document.getElementById('numberHint').classList.add('valid');
            } else {
                document.getElementById('numberHint').classList.remove('valid');
            }
            
            // Check for special characters
            if (/[^A-Za-z0-9]/.test(password)) {
                strength += 25;
                document.getElementById('specialHint').classList.add('valid');
            } else {
                document.getElementById('specialHint').classList.remove('valid');
            }
            
            // Update strength bar
            document.getElementById('passwordStrengthBar').style.width = strength + '%';
            document.getElementById('passwordStrengthBar').style.backgroundColor = 
                strength < 50 ? '#f44336' : 
                strength < 75 ? '#ff9800' : '#4CAF50';
        });
        
        // Password match checker
        confirmPasswordInput.addEventListener('input', function() {
            if (this.value !== passwordInput.value && this.value.length > 0) {
                passwordMatch.style.display = 'block';
            } else {
                passwordMatch.style.display = 'none';
            }
        });
        
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const business = document.getElementById('business').value;
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            const terms = document.getElementById('terms').checked;
            
            // Validation
            if (!fullName || !email || !business || !password || !confirmPassword) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            if (!terms) {
                alert('You must agree to the terms and conditions');
                return;
            }
            
            // Here you would typically send data to your backend
            console.log('Registration attempt with:', { 
                fullName, 
                email, 
                phone, 
                business, 
                password 
            });
            
            // For demo purposes, redirect to login
            window.location.href = 'login.html';
        });
    }
    
    // Social login handlers
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const provider = this.classList.contains('google') ? 'Google' :
                            this.classList.contains('facebook') ? 'Facebook' : 'Apple';
            
            console.log(`Attempting ${provider} login`);
            // In a real app, you would implement OAuth flow here
        });
    });
});