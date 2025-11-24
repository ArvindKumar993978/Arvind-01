const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const termsAccepted = document.getElementById('terms').checked;

    if (password !== confirmPassword) {
        alert("❌ Passwords do not match!");
        return;
    }

    if (!termsAccepted) {
        alert("Please accept terms & conditions.");
        return;
    }

    // Read existing users or create new array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email is already registered
    if (users.some(u => u.email === email)) {
        alert("Email is already registered!");
        return;
    }

    // New user object
    const userData = { firstName, lastName, email, password };

    // Add new user
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users)); // Save all users

    alert("✅ Account created successfully!");
    signupForm.reset();
    window.location.href = "login.html";
});
