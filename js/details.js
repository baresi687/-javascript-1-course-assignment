const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const corsFix = "https://noroffcors.herokuapp.com/"
const url = corsFix + "https://www.fishwatch.gov/api/species/" + id;
const singleResultsContainer = document.querySelector(".single-results");

async function getSingleApiObject() {
  try {
    const response = await fetch(url);
    const resultJSON = await response.json();
    const result = resultJSON[0];
    
    document.querySelector("title").innerHTML = result["Species Name"];

    singleResultsContainer.innerHTML += `<div class="single-object">
                                           <h1>${result["Species Name"]}</h1>
                                           <div class="object-description">
                                             <div>
                                                <img src="${result["Species Illustration Photo"].src}" alt="Fish Image">
                                                <h3>Image Gallery</h3>
                                                <div class="object-images"></div> 
                                             </div>                              
                                             <div>
                                               <p><span class="description">Scientific Name: </span>${result["Scientific Name"]}</p>
                                               <p><span class="description">Fishing rate: </span>${result["Fishing Rate"]}</p>
                                               <span class="description">Biology:</span>
                                               ${result.Biology}
                                             </div>
                                           </div>
                                         </div>`
    if (!result["Image Gallery"]) {
      document.querySelector(".object-images").innerHTML += `<h4>No images available</h4>`
    } else {
      for (let i = 0; i < result["Image Gallery"].length; i++) {
        document.querySelector(".object-images").innerHTML += `<img src="${result["Image Gallery"][i].src}" alt="Image of Fish">`
      }
    }

  } catch (error) {
    singleResultsContainer.innerHTML += displayError("error", error)
  } finally {
    document.querySelector(".loader").style.display = "none";
  }
}

getSingleApiObject();
