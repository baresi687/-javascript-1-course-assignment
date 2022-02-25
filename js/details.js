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
                                             <div class="column-2">
                                               <p><span class="description">Genre: </span>${result.genres}</p>
                                               <p class="plot"><span class="description">Plot: </span>${result.plot}</p>                                                                                              
                                               <p><span class="description">Director: </span>${result.directors}</p>
                                               <div class="movie-cast"><span class="description">Cast: </span></div>
                                               <div class="cast-img"></div>
                                             </div>
                                           </div>
                                         </div>`

    const movieCastDiv = document.querySelector(".movie-cast");
    const castImgDiv = document.querySelector(".cast-img");
    const castList = result.starList;
    const castIdImg = result.actorList
    let castListString = "";

    castList.forEach((item) => {
      castListString += `<a class="${item.id}">${item.name}</a>, `;
      for (let i = 0; i < castIdImg.length; i++) {
        if (item.id === castIdImg[i].id) {
          castImgDiv.innerHTML += `<img class="id-img ${item.id}" src="${castIdImg[i].image}" alt="Photo of actor">`
        }
      }
    })
    movieCastDiv.innerHTML += castListString.slice(0, castListString.length - 2);

    const movieCastAnchor = document.querySelectorAll(".movie-cast a");
    const idImg = document.querySelectorAll(".id-img")

    movieCastAnchor.forEach((aElem) => {
      aElem.addEventListener("mouseover", function () {
        idImg.forEach((item) => {
          if (item.classList[1] === aElem.classList[0]) {
            item.style.display = "inline-block";
          }
        })
      })
      aElem.addEventListener("mouseout", function () {
        document.querySelectorAll(".id-img").forEach((item) => {
          item.style.display = "none";
        })
      })
    })

  } catch (error) {
    singleResultsContainer.innerHTML += displayError("error", error);
  } finally {
    document.querySelector(".loader").style.display = "none";
  }
}

getSingleMovie();
