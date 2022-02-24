const resultContainer = document.querySelector(".results");
const corsFix = "https://noroffcors.herokuapp.com/"
const url = corsFix + "https://www.fishwatch.gov/api/species/";

let itemStart = 0;
let itemStop = 9;

async function getAPIresultsToLoop(itemStart, itemStop) {
  try {
    const response = await fetch(url);
    const results = await response.json()

    document.querySelector("h1").innerHTML = "Fishwatch stocks";

    for (itemStart; itemStart < itemStop; itemStart++) {
      prevBtn.disabled = itemStart < 9;
      if (itemStart >= results.length) {
        nextBtn.disabled = true;
        break;
      } else {
        nextBtn.disabled = false;
      }

      const fishIdString = results[itemStart].Path;
      const fishId = fishIdString.slice(10);

      resultContainer.innerHTML += `<a class="object-cards" href="./details.html?id=${fishId}">
                                      <div class="objects">
                                        <h2>${results[itemStart]["Species Name"]}</h2>                        
                                        <p><span class="description">Region: </span>${results[itemStart]["NOAA Fisheries Region"]}</p>
                                        <p><span class="description">Quote: </span>${results[itemStart].Quote}</p>
                                      </div>
                                    </a> `
    }
  } catch (error) {
    resultContainer.innerHTML += displayError("error", error)
  } finally {
    document.querySelector(".loader").style.display = "none";
  }
}

getAPIresultsToLoop(itemStart, itemStop);

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", function (event) {
  event.preventDefault();
  itemStart += 9;
  itemStop += 9;
  resultContainer.innerHTML = "";
  document.querySelector(".loader").style.display = "block";
  getAPIresultsToLoop(itemStart, itemStop);
})

prevBtn.addEventListener("click", function (event) {
  event.preventDefault();
  itemStart -= 9;
  itemStop -= 9;
  resultContainer.innerHTML = "";
  document.querySelector(".loader").style.display = "block";
  getAPIresultsToLoop(itemStart, itemStop);
})
