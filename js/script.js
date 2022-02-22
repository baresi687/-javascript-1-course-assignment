const resultContainer = document.querySelector(".results");
const corsFix = "https://noroffcors.herokuapp.com/"
const url = corsFix + "https://www.fishwatch.gov/api/species/";

async function getAPIresultsToLoop() {
  try {
    const response = await fetch(url);
    const results = await response.json()

    document.querySelector("h1").innerHTML = "Fishwatch stocks"

    for (let i = 0; i <= 30; i++) {
      const fishIdString = results[i].Path;
      const fishId = fishIdString.slice(10);

      if (!results[i].Population) {
        continue;
      }

      resultContainer.innerHTML += `<a class="object-cards" href="./details.html?id=${fishId}">
                                      <div class="objects">
                                        <h2>${results[i]["Species Name"]}</h2>                            
                                        <p><span class="description">Region: </span>${results[i]["NOAA Fisheries Region"]}</p>
                                        <p><span class="description">Quote: </span>${results[i].Quote}</p>
                                      </div>
                                    </a> `
    }
  } catch (error) {
    resultContainer.innerHTML += displayError("error", error)
  } finally {
    document.querySelector(".loader").style.display = "none";
  }
}

getAPIresultsToLoop()
