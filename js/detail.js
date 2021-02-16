const detailContainer = document.querySelector(".beer-container");
const loader = document.querySelector(".loader");
const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.punkapi.com/v2/beers/" + id;

console.log(url);

async function getBeerDetail() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHTML(details);

    loader.classList.remove("loader");
    title.innerHTML = ` ${details[0].name}`;
  } catch (error) {
    console.log("error");
    loader.classList.remove("loader");
    detailContainer.innerHTML += displayError("There has been an error.");
  }
}

getBeerDetail();

function createHTML(details) {
  detailContainer.innerHTML += `<div class="beer-detail"><h1>${details[0].name}</h1>
     <p class="italics">${details[0].tagline}</p>
     <img src="${details[0].image_url}" alt="${details.name}"/>
     <p>${details[0].description}</p>
     <p>Pair with: ${details[0].food_pairing}</p>
    <p class="italics">First brewed: ${details[0].first_brewed}</p></div>`;
}
