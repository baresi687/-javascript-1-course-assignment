const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://swapi.dev/api/films/" + id;
const singleResultsContainer = document.querySelector(".single-results");

async function getSingleMovie() {
  try {
    const response = await fetch(url);
    const result = await response.json()

    document.querySelector("title").innerHTML = result.title;

    singleResultsContainer.innerHTML += `<div class="single-movie">
                                           <h1>${result.title}</h1>
                                           <div class="movie-description">                               
                                             <div>
                                               <p><span class="bold">Opening crawl: </span>${result.opening_crawl}</p>
                                               <p><span class="bold">Director: </span>${result.director}</p>
                                               <p><span class="bold">Producer: </span>${result.producer}</p>
                                             </div>
                                           </div>
                                         </div>`
  } catch (error) {
    singleResultsContainer.innerHTML += displayError("error", error)
  } finally {
    document.querySelector(".loader").style.display = "none";
  }
}

getSingleMovie();