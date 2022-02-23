const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://imdb-api.com/en/API/Title/k_gcm4qbt6/" + id;
const singleResultsContainer = document.querySelector(".single-results");

async function getSingleMovie() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    document.querySelector("title").innerHTML = result.title;

    singleResultsContainer.innerHTML += `<div class="single-movie">
                                           <h1>${result.fullTitle}</h1>
                                           <div class="movie-description">
                                             <img src="${result.image}" alt="Movie poster"/>
                                             <div>
                                               <p><span class="description">Genre: </span>${result.genres}</p>
                                               <p><span class="description">Plot: </span>${result.plot}</p>
                                               <div class="movie-cast"><span class="description">Cast: </span></div>
                                               <p><span class="description">Director: </span>${result.directors}</p>
                                             </div>
                                           </div>
                                         </div>`

    const movieCast = document.querySelector(".movie-cast");
    const castList = result.starList;
    let castListString = "";
    castList.forEach((item) => {
      castListString += `<a>${item.name}</a>, `
    })
    movieCast.innerHTML += castListString.slice(0, castListString.length - 2);

  } catch (error) {
    singleResultsContainer.innerHTML += displayError("error", error);
  } finally {
    document.querySelector(".loader").style.display = "none";
  }
}

getSingleMovie();
