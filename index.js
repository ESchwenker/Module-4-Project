// data
// http://www.omdbapi.com/?apikey=[a5e7ab33]&
// poster
// http://img.omdbapi.com/?apikey=[a5e7ab33]&


// GRABBING ELEMENTS FROM HTML
const moviesWrapper = document.querySelector('.movies');
const searchName = document.querySelector('.searchName');

// GLOBAL MOVIES VARIABLE
let currentMovies = []


// HANDLING THE SEARCH
function searchChange(event) {
  renderMovies(event.target.value)
  searchName.innerHTML = event.target.value
}

// RENDERING- CALLING API
async function renderMovies(searchTerm) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=a5e7ab33&s=${searchTerm}`)
  const data = await response.json();
  currentMovies = data.Search;
  displayMovies(currentMovies);
}

// DISPLAYING
function displayMovies(movieList) {
    moviesWrapper.innerHTML = movieList.slice(0, 9).map((movie) => {
    return `<div class="movie">
              <img class="movie__poster" src="${movie.Poster}">
              <h3 class="movie__title">${movie.Title}</h3>
              <h3 class="movie__year">${movie.Year}</h3>
            </div>`
  }).join('');
}

// SORTING
function sortChange(event) {
  const sortOption = event.target.value

  let sortedMovies = [...currentMovies]

  if (sortOption === "newest") {
    sortedMovies.sort((a, b) => b.Year - a.Year)
  } else if (sortOption === "oldest") {
    sortedMovies.sort((a, b) => a.Year - b.Year)
  } else if (sortOption === "name") {
    sortedMovies.sort((a, b) => a.Title.toLowerCase().localeCompare(b.Title.toLowerCase()))
  }

  displayMovies(sortedMovies);
}

const button = document.getElementById("toggleBtn");
const info = document.getElementById("info");

button.addEventListener("click", () => {
  info.classList.toggle("hidden");
});
















