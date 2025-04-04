document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

//      document.getElementById("loginError").style.display = "none";

    const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/users/login/";

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    axios.get(API_URL+email)
        .then((response) => {
           const user = response.data;
           if (!(user.password == password)) {

                 document.getElementById("loginError1").style.display = "none";
                 document.getElementById("loginError2").style.display = "block";
                 return;
           };
                 localStorage.setItem("id", user.id);
                 localStorage.setItem("email", user.email);

                 alert("Login Successful!");
                 document.getElementById("loginForm").reset();

                 window.location.replace("/user-dashboard-page")
        })
        .catch((err) => {
              document.getElementById("loginError1").style.display = "block";
        })
})