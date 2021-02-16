// const detailContainer = document.querySelector(".beer-detail");
// const loader = document.querySelector(".loader");
// const title = document.querySelector("title");

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");

// console.log(id);

// const url = "https://api.punkapi.com/v2/beers/" + id;

// async function getBeerDetail() {
//   try {
//     const response = await fetch(url);
//     const details = await response.json();

//     console.log(details);

//     detailContainer.innerHTML = "";

//     for (let i = 0; i < details.length; i++) {
//       detailContainer.innerHTML += `
//     <h1>${details[i].name}</h1>
//     <p class="tagline">${details[i].tagline}</p>
//     <img src="${details[i].image_url}" alt="${details.name}"/>
//     <p>${details[i].description}</p>
//     <p>Pair with: ${details[i].food_pairing}</p>

//     `;
//       loader.classList.remove("loader");
//       title.innerHTML = `${details[i].name}`;
//     }
//   } catch (error) {
//     console.log(error);
//     detailContainer.innerHTML = message("error", error);
//   }
// }

// getBeerDetail();

// // function createHTML(details) {
// //   detailContainer.innerHTML += `<div>
// //     <h1>${details.name}</h1>
// //     <p class="type">${details.tagline}</p>
// //     <p>${details.description}</p>
// //     <img src="${details.image_url}" alt="${details.name}"/>
// //     <p>${details.description}</p></div>`;
// // }

const detailContainer = document.querySelector(".beer-detail");
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

    createHtml(details);

    loader.classList.remove("loader");
    title.innerHTML = ` ${details.name}`;
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML += `There has been an error fetching API`;
  }
}

getBeerDetail();

function createHtml(details) {
  detailContainer.innerHTML += `<h1>${details.name}</h1>
     <p class="tagline">${details.tagline}</p>
     <img src="${details.image_url}" alt="${details.name}"/>
     <p>${details.description}</p>
     <p>Pair with: ${details.food_pairing}</p>`;
}
