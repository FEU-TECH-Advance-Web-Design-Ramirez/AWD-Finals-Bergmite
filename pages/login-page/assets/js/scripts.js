document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("loginError").style.display = "none";

    const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/users/login/";

    const email = document.getElementById("email").value;

    axios.get(API_URL+email)
        .then((res) => {
            alert("Login Successful");
            document.getElementById("loginForm").reset();
        })
        .catch((err) => {
            document.getElementById("loginError").style.display = "block";
        })
})