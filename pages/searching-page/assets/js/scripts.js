function filterConcerts() {
    let searchInput = document.getElementById('search').value.toLowerCase();
    let genreFilter = document.getElementById('genreFilter').value;
    let concerts = document.querySelectorAll('.concert');

    concerts.forEach(concert => {
        let textMatch = concert.textContent.toLowerCase().includes(searchInput);
        let genreMatch = genreFilter === 'all' || concert.getAttribute('data-genre') === genreFilter;
        concert.style.display = textMatch && genreMatch ? '' : 'none';
    });
}
