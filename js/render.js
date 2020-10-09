
function renderMovieListFromMap(list, map) {
  cleanMovieList()
  list.forEach(movieID => renderElement(map.get(movieID)))

}


function renderElement(movie) {
  const element = buildElement(movie)
  /* document.createElement("h1")
  element.textContent = movie.title */
  window.container.append(element)

}

function buildElement({ title, poster_path, vote_average, id, recommended }) {
  const template = `
       <article class="movie ${recommended ? " recommended" : ""} ">
        <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path} " alt="">
        <p class="movie-title">${title}</p>
        <p class="movie-id">${id}</p>
        <span class="movie-rate">${vote_average}</span>
      </article>
  `
  const movie = document.createElement("div")
  movie.innerHTML = template
  return movie.firstElementChild


}

function cleanMovieList() {
  window.container.innerHTML = ""
}

export default function renderMovieList(list) {
  cleanMovieList()
/*   console.table(list, ["id", "title", "poster_path", "vote_average"])
 */  list.forEach(renderElement);
}

export {
  renderMovieListFromMap
}