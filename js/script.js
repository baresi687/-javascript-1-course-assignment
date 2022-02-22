const resultContainer = document.querySelector(".results");
const url = "https://swapi.dev/api/films/"

async function getMovies() {
  try {
    const response = await fetch(url);
    const resultJSON = await response.json()
    const results = resultJSON.results;

    for (let i = 0; i < results.length; i++) {
      const episodeIdUrl = results[i].url;
      const episodeId = episodeIdUrl.slice(28, 29);

      resultContainer.innerHTML += `<a class="movie-cards" href="./details.html?id=${episodeId}">
                                      <div class="movies">
                                        <h2>${results[i].title}</h2>                                      
                                        <p>Episode: ${results[i].episode_id}</p>
                                        <p>Released: ${results[i].release_date}</p>
                                      </div>
                                    </a> `
    }
  } catch (error) {
    resultContainer.innerHTML += displayError("error", error)
  } finally {
    document.querySelector(".loader").style.display = "none";
  }
}

getMovies();