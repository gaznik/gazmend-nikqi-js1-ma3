
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=24646ecfb44e407a9ba3833f2e8f9c34";

const resultsContainer = document.querySelector(".results");

async function callRawg() {
  try {
    const response = await fetch(url);
    const gameResponse = await response.json();
    const rawgResults = gameResponse.results;
    resultsContainer.innerHTML = "";

    for (let i = 0; i < rawgResults.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="result"><p>Name: ${rawgResults[i].name}</p>
             <p>Rating: ${rawgResults[i].rating}</p>
             <p>Tags: ${rawgResults[i].tags.length}</p>
         </div>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = "An error occurred when calling the API";
  }
}

callRawg();