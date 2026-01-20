// data
// http://www.omdbapi.com/?apikey=[a5e7ab33]&
// poster
// http://img.omdbapi.com/?apikey=[a5e7ab33]&

const moviesWrapper = document.querySelector('.movies');
const searchName = document.querySelector('.searchName');


function searchChange(event) {
  renderMovies(event.target.value)
  searchName.innerHTML = event.target.value
}

async function renderMovies(searchTerm) {
  const response = await fetch(`https://www.omdbapi.com/?apikey=a5e7ab33&s=${searchTerm}`)
  const data = await response.json();
  const moviesArr = data.Search;
  console.log(moviesArr);
  moviesWrapper.innerHTML = moviesArr.slice(0, 9).map((movie) => {
    return `<div class="movie">
              <img class="movie__poster" src="${movie.Poster}">
              <h3 class="movie__title">${movie.Title}</h3>
              <h3 class="movie__year">${movie.Year}</h3>
            </div>`
  }).join('')

}


















