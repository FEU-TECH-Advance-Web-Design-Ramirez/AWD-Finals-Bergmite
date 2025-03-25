document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let errorElement = document.getElementById('error');

    if (password.length < 6) {
        errorElement.textContent = 'Password must be at least 6 characters long';
        return;
    }

    alert("Sign-up successful for " + name);
    errorElement.textContent = '';
    document.getElementById('sign-up-form').reset();
}