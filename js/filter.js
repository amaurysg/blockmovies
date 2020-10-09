import {
  renderMovieListFromMap
} from "./render.js"

import {
  movieList,
  allMovies,
  popular as mostValued,
  notPopular as leastValued
} from "./normalize.js"

filter.addEventListener("change", function () {
  switch (this.value) {
    case "most-valued":
      console.log("Mooosttt")
      return renderMovieListFromMap(mostValued, movieList)
    case "least-valued":
      console.log("leess")
      return renderMovieListFromMap(leastValued, movieList)
    default:
      console.log("alllt")
      return renderMovieListFromMap(allMovies, movieList)
  }
})