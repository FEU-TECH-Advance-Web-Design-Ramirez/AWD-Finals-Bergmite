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

                   const date = concert.date;
                   const year = date.slice(0, 4)
                   const month = date.slice(5, 7);
                   const day = date.slice(8,10);
                   const time = date.slice(12,16);

                   let formattedDate = month + "/" + day + "/" + year + " | " + time
            
                   const dateCell = document.createElement("td");
                   dateCell.textContent = formattedDate;
                   dateCell.style.textAlign = "center"
                   row.appendChild(dateCell);
            
                   const venueCell = document.createElement("td");
                   venueCell.textContent = concert.venue;
                   venueCell.style.textAlign = "center"
                   row.appendChild(venueCell);
            
                   const genreCell = document.createElement("td");
                   genreCell.textContent = concert.genre;
                   genreCell.style.textAlign = "center"
                   row.appendChild(genreCell);

                   const validatedCell = document.createElement("td");
                   if (concert.validated) {
                        validatedCell.textContent = "Yes";
                   }
                   else {
                        validatedCell.textContent = "No";
                   }
                   validatedCell.style.textAlign = "center";
                   row.appendChild(validatedCell);

                   const reviewCell = document.createElement("td");
                   const reviewLink = document.createElement("a");
                   reviewLink.textContent = "Review";
                   reviewCell.appendChild(reviewLink);
                   reviewLink.setAttribute("href", "#reviewForm");
                   reviewCell.style.textAlign = "center";
                   reviewLink.style.color = "white";

                   reviewCell.onclick = function(){
                       reviewCell.style.cursor = "pointer";
                       document.getElementById("concertId").value = concert.id;
                   };
                   row.appendChild(reviewCell);
            
                   concertsTable.appendChild(row);
            });
         })
            .catch(error => {
                console.error("Error fetching concerts:", error);
            });
}
function getId() {
   
   const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/users";

   const email = document.getElementById("email").value;

    axios.get(API_URL)
    .then(response => {
        const users = response.data;
        users.forEach(user => {
           if (user.email == email) {
               alert(user.id);
               return user.id;
           }
        });
        })
        .catch(error => {
            document.getElementById("output").innerHTML = "Error fetching users";
            console.error("Error:", error);
        });

}

document.getElementById("concertForm").addEventListener("submit", function (event) {

    const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/concerts";
    event.preventDefault();

    const title = document.getElementById("concertTitle").value;
    const date = document.getElementById("concertDate").value;
    const venue = document.getElementById("concertVenue").value;
    const genre = document.getElementById("concertGenre").value;
    const submittedBy = localStorage.getItem("id");

    console.log(title)
    console.log(date)
    console.log(venue)
    console.log(genre)
    console.log(submittedBy)
    
    axios.post(API_URL, { title, date, venue, genre, submittedBy })
        .then(response => {
            alert("Concert added successfully!");
            document.getElementById("concertForm").reset();
            displayConcerts();
        })
        .catch(error => {
            alert(error.message);
            console.error("Error Submitting Concert:", error);
        });
});






document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/reviews";

    const concertId = document.getElementById("concertId").value;
    const userId = localStorage.getItem("id");
    const rating = parseInt(document.getElementById("rating").value);
    const comment = document.getElementById("comment").value;

    console.log(concertId)
    console.log(userId)
    console.log(rating)
    console.log(comment)

    axios.post(API_URL, { concertId, userId, rating, comment })
        .then(response => {
              alert("Concert Review Submitted Successfully!");    
              document.getElementById("reviewForm").reset(); // Clear the form
        })
        .catch(error => {
            alert(error);
            console.log("Error:", error);
        });
});

displayConcerts()




// function displayConcerts() {
//      const concertsTable = document.getElementById("concertsTable");

//      // Loop through the concerts array and add each concert to the table
//      concerts.forEach(concert => {
//        const row = document.createElement("tr");

//        // Add cells to the row for each concert property
//        const titleCell = document.createElement("td");
//        titleCell.textContent = concert.title;
//        row.appendChild(titleCell);

//        const dateCell = document.createElement("td");
//        dateCell.textContent = concert.date;
//        row.appendChild(dateCell);

//        const venueCell = document.createElement("td");
//        venueCell.textContent = concert.venue;
//        row.appendChild(venueCell);

//        const genreCell = document.createElement("td");
//        genreCell.textContent = concert.genre;
//        row.appendChild(genreCell);

//        // Append the row to the table body
//        concertsTable.appendChild(row);
//      });
//    }





// // Function to add a concert to the concerts table
// function displayConcerts() {
//      const concertsTable = document.getElementById("concertsTable");
//      concertsTable.innerHTML = ""; // Clear existing table rows

//      concerts.forEach((concert, index) => {
//      const row = document.createElement("tr");
//      row.innerHTML = `
//           <td>${concert.title}</td>
//           <td>${concert.date}</td>
//           <td>${concert.venue}</td>
//           <td>${concert.genre}</td>
//      `;
//      concertsTable.appendChild(row);
//      });
// }





// document.addEventListener("DOMContentLoaded", function () {
// const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/concerts";
// const concertList = document.getElementById("concertList");
// const concertDetails = document.getElementById("concertDetails");
// const concertIdInput = document.getElementById("concertId");
// const fetchByIdButton = document.getElementById("fetchById");

// function fetchConcerts() {

    
//      axios.get(API_URL)
//           .then(response => {
//                const concerts = response.data;
//                concertList.innerHTML = "";
//                concerts.forEach(concert => {
//                     const concertItem = document.createElement("li");
//                     concertItem.textContent = ${concert.title} - ${concert.date} - ${concert.venue} - ${concert.genre} (Submitted by: ${concert.submittedBy});
//                     concertList.appendChild(concertItem);
//                });
//           })
//           .catch(error => {
//                console.error("Error fetching concerts:", error);
//           });
// }})

// function fetchConcertById() {
//      const concertId = concertIdInput.value.trim();
//      if (!concertId) {
//          alert("Please enter a concert ID");
//          return;
//      }
    
//      axios.get(${API_URL}/${concertId})
//          .then(response => {
//              const concert = response.data;
//              concertDetails.innerHTML = `
//                  <h2>Concert Details</h2>
//                  <p><strong>Title:</strong> ${concert.title}</p>
//                  <p><strong>Date:</strong> ${concert.date}</p>
//                  <p><strong>Venue:</strong> ${concert.venue}</p>
//                  <p><strong>Genre:</strong> ${concert.genre}</p>
//                  <p><strong>Submitted by:</strong> ${concert.submittedBy}</p>
//              `;
//          })
//          .catch(error => {
//              console.error("Error fetching concert by ID:", error);
//              concertDetails.innerHTML = "<p>Error fetching concert details. Please check the ID.</p>";
//          });
// }

// fetchConcerts();



// document.getElementById("reviewForm").addEventListener("submit", function (event) {
//      event.preventDefault();

//      const API_URL = "https://demo-api-skills.vercel.app/api/MusicLover/concerts/search"; 


//      const concertId = document.getElementById("concertId").value;
//      const userId = document.getElementById("userId").value;
//      const rating = document.getElementById("rating").value;
//      const comment = document.getElementById("comment").value;


//      axios.post(API_URL, { concertId, userId, rating, comment })
//          .then(response => {
//              alert("Concert Review added successfully!");
//              fetchUsers();
//              document.getElementById("reviewForm").reset();
//          })
//          .catch(error => {
//              alert(error.message);
//              console.error("Error:", error);
//          });
//  });






















// // Handle concert form submission
// document.getElementById("concertForm").addEventListener("submit", function(event) {
//      event.preventDefault();

//      const concertTitle = document.getElementById("concertTitle").value;
//      const concertDate = document.getElementById("concertDate").value;
//      const concertVenue = document.getElementById("concertVenue").value;
//      const concertGenre = document.getElementById("concertGenre").value;
//      const submittedBy = document.getElementById("submittedBy").value;

//      // Push the new concert into the concerts array
//      const newConcert = {
//      title: concertTitle,
//      date: concertDate,
//      venue: concertVenue,
//      genre: concertGenre,
//      submittedBy: submittedBy,
//      };
//      concerts.push(newConcert);
    
//      // Display updated concerts list
//      displayConcerts();

//      // Reset form fields
//      document.getElementById("concertForm").reset();
// });

// // Handle review form submission
// document.getElementById("reviewForm").addEventListener("submit", function(event) {
//      event.preventDefault();

//      const concertId = document.getElementById("concertId").value;
//      const userId = document.getElementById("userId").value;
//      const rating = document.getElementById("rating").value;
//      const comment = document.getElementById("comment").value;

//      const newReview = {
//      concertId: concertId,
//      userId: userId,
//      rating: rating,
//      comment: comment,
//      };

//      reviews.push(newReview);

//      // Display success message
//      alert("Review submitted successfully!");

//      // Reset review form fields
//      document.getElementById("reviewForm").reset();
// });