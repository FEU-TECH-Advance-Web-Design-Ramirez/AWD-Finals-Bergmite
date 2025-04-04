document.getElementById("signupForm").addEventListener("submit", function(event) {
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
              window.location.replace("/AWD-Finals-Bergmite/pages/login-page");
              document.getElementById("signupForm").reset(); // Clear the form
        })
        .catch(error => {
            alert(error.message);
            console.error("Error:", error);
        });
});



// function fetchUsers() {
//      const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/users";

//      axios.get(API_URL)
//      .then(response => {
//          const users = response.data;
//          let outputHTML = "<ul>";
//          users.forEach(user => {
//              outputHTML += <li><strong>${user.id}</strong> - ${user.email}</li> ${user.name};
//          });
//          outputHTML += "</ul>";
//          document.getElementById("output").innerHTML = outputHTML;
//          })
//          .catch(error => {
//              document.getElementById("output").innerHTML = "Error fetching users";
//              console.error("Error:", error);
//          });
//  }