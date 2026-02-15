document.addEventListener('DOMContentLoaded', function () {
    const studentBtn = document.querySelector('.role-btn:nth-child(1)');
    const adminBtn = document.querySelector('.role-btn:nth-child(2)');
    const loginForm = document.querySelector('form');

    const loginHeader = document.querySelector('.login-header h2');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');

    function setActiveRole(role) {
        if (role === 'student') {
            studentBtn.classList.add('active');
            adminBtn.classList.remove('active');
            loginHeader.textContent = 'Student Login';
            emailInput.placeholder = 'Enter your email';
            passwordInput.placeholder = 'Enter your password';
            emailInput.value = '';
            passwordInput.value = '';
            console.log('Student role selected');
        } else {
            adminBtn.classList.add('active');
            studentBtn.classList.remove('active');
            loginHeader.textContent = 'Admin Login';
            emailInput.placeholder = 'Enter admin email';
            passwordInput.placeholder = 'Enter admin password';
            emailInput.value = '';
            passwordInput.value = '';
            console.log('Admin role selected');
        }
    }

    // Initialize with Student active
    setActiveRole('student');

    studentBtn.addEventListener('click', function () {
        setActiveRole('student');
    });

    adminBtn.addEventListener('click', function () {
        setActiveRole('admin');
    });

    // Redirect to Dashboard on Login
    const loginBtn = document.querySelector('.btn-primary');
    if (loginBtn) {
        loginBtn.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent form submission

            if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
                alert('Please fill all fields');
            } else {
                window.location.href = 'dashboard.html';
            }
        });
    }
});
