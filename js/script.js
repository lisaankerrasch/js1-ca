const url = "https://api.punkapi.com/v2/beers";
const beerContainer = document.querySelector(".beer-container");
const loader = document.querySelector(".loader");

async function getBeer() {
  try {
    const response = await fetch(url);
    const list = await response.json();
    const beer = list;

    beerContainer.innerHTML = "";

    for (let i = 0; i < beer.length; i++) {
      beerContainer.innerHTML += `<a href="detail.html?id=${beer[i].id}">
      <div class="beer-list">
       <h1 class="name">${beer[i].name}</h1>
      <p class="tagline">${beer[i].tagline}</p>
      <img src="${beer[i].image_url}" alt="${beer[i].name}"/>
     </div>
      </a>`;
      loader.classList.remove("loader");
    }
  } catch (error) {
    console.log("error");
    loader.classList.remove("loader");
    beerContainer.innerHTML += displayError("Unable to fetch results");
  }
}

getBeer();
