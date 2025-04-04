function displayConcerts() {
    const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/concerts";
    const concertsTable = document.getElementById("concertsTable");
    concertsTable.innerHTML = "";

    axios.get(API_URL)
        .then(response => {
            const concerts = response.data;
            concerts.forEach(concert => {
                const row = document.createElement("tr");

                const titleCell = document.createElement("td");
                titleCell.textContent = concert.title;
                row.appendChild(titleCell);

                const dateCell = document.createElement("td");
                dateCell.textContent = concert.date;
                row.appendChild(dateCell);

                const venueCell = document.createElement("td");
                venueCell.textContent = concert.venue;
                row.appendChild(venueCell);

                const genreCell = document.createElement("td");
                genreCell.textContent = concert.genre;
                row.appendChild(genreCell);

                const validatedCell = document.createElement("td");
                validatedCell.textContent = concert.validated ? "Yes" : "No";
                validatedCell.style.cursor = "pointer";  // Change cursor to pointer to indicate it's clickable
                validatedCell.addEventListener("click", function () {
                    toggleConcertValidation(concert.id, concert.validated);
                });
                row.appendChild(validatedCell);

                const reviewsCell = document.createElement("td");
                   const reviewsLink = document.createElement("a");
                   reviewsLink.textContent = "Review";
                   reviewsCell.appendChild(reviewsLink);
                   reviewsLink.setAttribute("href", "#reviewTable");
                   reviewsCell.style.textAlign = "center";
                   reviewsLink.style.color = "white";

                   reviewsCell.onclick = function(){
                   reviewsCell.style.cursor = "pointer";
                   document.getElementById("concertId").value = concert.id;
                   };
                   row.appendChild(reviewsCell);

                concertsTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error fetching concerts:", error);
        });
}

function toggleConcertValidation(concertId, currentValidationStatus) {
    const API_URL = `https://demo-api-skills.vercel.app/api/MusicLover/concerts/${concertId}/validate`;

    // Toggle the validation status
    const newValidationStatus = !currentValidationStatus;

    axios.post(API_URL, { validated: newValidationStatus })
        .then(response => {
            alert("Concert validation status updated!");
            displayConcerts();  // Refresh the concerts list to reflect the new status
        })
        .catch(error => {
            alert("Error updating concert validation status");
            console.error("Error updating validation status:", error);
        });
}









// function displayConcerts() {

//      const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/concerts";

//      const concertsTable = document.getElementById("concertsTable");
//      concertsTable.innerHTML = "";

//      axios.get(API_URL)
//              .then(response => {
//                const concerts = response.data;

//                concerts.forEach(concert => {
//                     const row = document.createElement("tr");

//                     const titleCell = document.createElement("td");
//                     titleCell.textContent = concert.title;
//                     row.appendChild(titleCell);

//                     const date = concert.date;
//                     const year = date.slice(0, 4)
//                     const month = date.slice(5, 7);
//                     const day = date.slice(8,10);
//                     const time = date.slice(12,16);

//                     let formattedDate = month + "/" + day + "/" + year + " | " + time
            
//                     const dateCell = document.createElement("td");
//                     dateCell.textContent = formattedDate;
//                     dateCell.style.textAlign = "center"
//                     row.appendChild(dateCell);
            
//                     const venueCell = document.createElement("td");
//                     venueCell.textContent = concert.venue;
//                     venueCell.style.textAlign = "center"
//                     row.appendChild(venueCell);
            
//                     const genreCell = document.createElement("td");
//                     genreCell.textContent = concert.genre;
//                     genreCell.style.textAlign = "center"
//                     row.appendChild(genreCell);

//                     const validatedCell = document.createElement("td");
//                     if (concert.validated) {
//                          validatedCell.textContent = "Yes";
//                     }
//                     else {
//                          validatedCell.textContent = "No";
//                     }
//                     validatedCell.style.textAlign = "center";
//                     row.appendChild(validatedCell);

//                     const validateCell = document.createElement("td");
//                     const validateButton = document.createElement("button");
//                     reviewLink.textContent = "Validate";
//                     validateCell.appendChild(validateButton);
//                     validateCell.style.textAlign = "center";
//                     validateButton.style.color = "white";

//                     validateButton.onclick = function(){
//                         reviewCell.style.cursor = "pointer";
//                         document.getElementById("concertId").value = concert.id;
//                     };
//                     row.appendChild(reviewCell);
            
//                     concertsTable.appendChild(row);
//              });
//           })
//              .catch(error => {
//                  console.error("Error fetching concerts:", error);
//              });
// }
// document.getElementById("validateConcertForm").addEventListener("submit", function (event) {
//      event.preventDefault();

//      const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/concerts/";
    
//      const id = document.getElementById("concertId").value;
    
//      axios.post(API_URL + id + "/validate")
//          .then(response => {
//              alert("Concert Validated Successfully!");
//              document.getElementById("validateConcertForm").reset();
//              displayConcerts()
//          })
//          .catch(error => {
//              alert(error.message);
//              console.error("Error Validating Concert:", error);
//          });
//  });


displayConcerts()
displayConcertReviews()





// 


//  function displayConcertReviews() {
//      const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/reviews";
//      const reviewTable = document.getElementById("reviewTable");
//      reviewTable.innerHTML = "";

//      axios.get(API_URL)
//          .then(response => {
//              const reviews = response.data;
//              reviews.forEach(review => {
//                  const row = document.createElement("tr");

//                  const concertIdCell = document.createElement("td");
//                  concertIdCell.textContent = review.concertId;
//                  row.appendChild(concertIdCell);

//                  const userIdCell = document.createElement("td");
//                  userIdCell.textContent = review.userId;
//                  row.appendChild(userIdCell);

//                  const ratingCell = document.createElement("td");
//                  ratingCell.textContent = review.rating;
//                  row.appendChild(ratingCell);

//                  const commentCell = document.createElement("td");
//                  commentCell.textContent = review.comment;
//                  row.appendChild(commentCell);

//                  const validatedReviewCell = document.createElement("td");
//                  validatedReviewCell.textContent = review.validated ? "Yes" : "No";
//                  validatedReviewCell.style.cursor = "pointer";  // Change cursor to pointer to indicate it's clickable
//                  validatedReviewCell.addEventListener("click", function () {
//                      toggleReviewValidation(review.id, review.validated);
//                  });
//                  row.appendChild(validatedReviewCell);

//                  reviewTable.appendChild(row);
//              });
//          })
//          .catch(error => {
//              console.error("Error fetching reviews:", error);
//          });
//  }

//  function toggleReviewValidation(reviewId, currentValidationStatus) {
//      const API_URL = https://demo-api-skills.vercel.app/api/MusicLover/reviews/${reviewId}/validate;

//      // Toggle the validation status
//      const newValidationStatus = !currentValidationStatus;

//      axios.post(API_URL, { validated: newValidationStatus })
//          .then(response => {
//              alert("Review validation status updated!");
//              displayConcertReviews();  // Refresh the review list to reflect the new status
//          })
//          .catch(error => {
//              alert("Error updating review validation status");
//              console.error("Error updating validation status:", error);
//          });
//  }

//  document.getElementById("validateReviewForm").addEventListener("submit", function (event) {
//      event.preventDefault();

//      const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/reviews/";
//      const id = document.getElementById("concertId").value;

//      axios.post(API_URL + id + "/validate")
//          .then(response => {
//              alert("Concert Validated Successfully!");
//              document.getElementById("validateReviewForm").reset();
//              displayConcerts();
//          })
//          .catch(error => {
//              alert(error.message);
//              console.error("Error Validating Concert:", error);
//          });
//  });

// Initial function calls to populate the tables
displayConcerts();
displayConcertReviews();