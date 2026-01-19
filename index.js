// data
// http://www.omdbapi.com/?apikey=[a5e7ab33]&
// poster
// http://img.omdbapi.com/?apikey=[a5e7ab33]&

async function main() {
  const data = await fetch("http://www.omdbapi.com/?apikey=a5e7ab33&")
  const dataMovies = data.json();

  console.log(dataMovies);
}

main()













