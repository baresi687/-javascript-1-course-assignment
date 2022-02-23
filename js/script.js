const resultContainer = document.querySelector(".results");
const corsFix = "https://noroffcors.herokuapp.com/"
const url = corsFix + "https://www.fishwatch.gov/api/species";

let pages = 0;
let loopPage = 9;

async function getAPIresultsToLoop(pages, loopPage) {
  try {
    const response = await fetch(url);
    const results = await response.json()

    document.querySelector("h1").innerHTML = "Fishwatch stocks";

    for (pages; pages < loopPage; pages++) {
      const fishIdString = results[pages].Path;
      const fishId = fishIdString.slice(10);

      if (loopPage >= results.length) {
        nextBtn.disabled = true;
        break;
      }

      resultContainer.innerHTML += `<a class="object-cards" href="./details.html?id=${fishId}">
                                      <div class="objects">
                                        <h2>${results[pages]["Species Name"]}</h2>                        
                                        <p><span class="description">Region: </span>${results[pages]["NOAA Fisheries Region"]}</p>
                                        <p><span class="description">Quote: </span>${results[pages].Quote}</p>
                                      </div>
                                    </a> `
    }
  } catch (error) {
    resultContainer.innerHTML += displayError("error", error)
  } finally {
    document.querySelector(".loader").style.display = "none";
  }
}

getAPIresultsToLoop(pages, loopPage);

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", function (event) {
  event.preventDefault();
  pages += 9;
  loopPage += 9;
  resultContainer.innerHTML = "";
  document.querySelector(".loader").style.display = "block";
  getAPIresultsToLoop(pages, loopPage);
  prevBtn.disabled = pages < 8;
})

prevBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (pages > 0 || loopPage > 9) {
    pages -= 9;
    loopPage -= 9;
    resultContainer.innerHTML = "";
    document.querySelector(".loader").style.display = "block";
    getAPIresultsToLoop(pages, loopPage);
    prevBtn.disabled = pages < 8;
    nextBtn.disabled = pages >= 115;
  }
})
