document.getElementById("concertForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const concertName = document.getElementById("concertName").value;
    const artist = document.getElementById("artist").value;
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    if (concertName && artist && date && location && description) {
        document.getElementById("message").textContent = "Concert submitted successfully!";
        this.reset(); // Clear form fields
    } else {
        document.getElementById("message").textContent = "Please fill in all fields.";
    }
});
