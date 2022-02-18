const resultContainer = document.querySelector(".results");
const url = "https://imdb-api.com/en/API/Top250Movies/k_gcm4qbt6"

async function getMovies() {
  try {
    const response = await fetch(url);
    const resultJSON = await response.json()
    const results = resultJSON.items;

    for (let i = 0; i <= 20; i++) {
      resultContainer.innerHTML += `<h2>Click any card for more details</h2>
                                    <a class="movie-cards" href="./details.html?id=${results[i].id}">
                                      <div class="movies">
                                        <h3>${results[i].title}</h3>
                                        <p>Released: ${results[i].year}</p>
                                        <p>Rating: ${results[i].imDbRating}</p>
                                      </div>
                                    </a>`
    }

  } catch (error) {
    resultContainer.innerHTML += displayError("error", error)

  } finally {
    document.querySelector(".loader").style.display = "none";
  }
}

/*
getMovies();
*/
