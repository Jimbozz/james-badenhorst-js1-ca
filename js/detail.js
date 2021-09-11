
const pokemonContainer = document.querySelector(".pokemon-details");
const errorContainer = document.querySelector(".errorContainer");
const title = document.querySelector("title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


const detailsUrl = "https://api.pokemontcg.io/v2/cards/" + id;

console.log(detailsUrl);

async function pokemonInfo() {

    try {
        const response = await fetch(detailsUrl);
        const result = await response.json();
        const pokemonDetails = result.data;
        const final = pokemonDetails
        pokemonContainer.innerHTML = "";
        errorContainer.style.display = "none";
        title.innerHTML = `${final.name}`;


        createHtml(final);
       
        
    } 
    
    catch(error) {
        console.log(error);
        pokemonContainer.innerHTML = "";
        errorContainer.innerHTML = displayError("An unexpected error occured." + " " + error);
    }
}

pokemonInfo();



function createAttacks() {
    for (let i = 0; i < final.attacks.length; i++) {
      if (!final[i].attacks[1]) {
        continue;
      }
    }
}


function getAttacks(attacks) {
    let output = `<div class="cardStyle">
                    <h4 class="cardHeading">Attacks</h4>`;
    for (let i = 0; i < attacks.length; i++) {
      output += `<p>${attacks[i].name}</p>`;
    }
    output += `</div>`;
    return output;
}


function createHtml(final) {

    let htmlString = '';
    htmlString += `
                <img class="pokemon-image" src="${final.images.small}">
                <h2 class="pokeName">${final.name}</h2>
                <div class="cardDetails">`;
  
    htmlString += getAttacks(final.attacks);
  
    htmlString += `
                    <div class="cardStyle">
                        <h4 class="cardHeading">Rarity</h4>
                        <p>${final.rarity}</p>
                    </div>
                    <div class="cardStyle">
                        <h4 class="cardHeading">Weaknesses</h4>
                        <p><b>Type:</b> ${final.weaknesses[0].type}</p>
                        <p><b>Value:</b> ${final.weaknesses[0].value}</p>
                    </div>
                </div>
                `;
  
    pokemonContainer.innerHTML = htmlString;
}


   


