document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;

    if (name && rating && review) {
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");
        reviewItem.innerHTML = `<strong>${name}</strong> rated it <strong>${rating}/5</strong><p>${review}</p>`;

        document.getElementById("reviewsList").appendChild(reviewItem);
        document.getElementById("message").textContent = "Review submitted successfully!";
        
        this.reset(); // Clear form fields
    } else {
        document.getElementById("message").textContent = "Please fill in all fields.";
    }
});
