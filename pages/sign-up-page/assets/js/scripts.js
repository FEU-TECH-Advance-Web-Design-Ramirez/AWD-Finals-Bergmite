document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/users";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        document.getElementById("signupError").style.display = "block";
        return;
    }

    axios.post(API_URL, { name, email, password })
        .then(response => {
            // If all fields are valid
            alert("Sign up successful! Welcome, " + name);
            document.getElementById("signupForm").reset(); // Clear the form
        })
        .catch(error => {
            alert(error.message);
            console.error("Error:", error);
        });
});
