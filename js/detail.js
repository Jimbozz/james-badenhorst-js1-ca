
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

        title.innerHTML = `${final.name}`;

        for(let i = 0; i < final.weaknesses.length; i++) {
           
            createHtml(final);
        }
        
    } 
    
    catch(error) {
        console.log(error);
        pokemonContainer.innerHTML = "";
        errorContainer.innerHTML = displayError("An unexpected error occured." + " " + error);
    }
}

pokemonInfo();




function createHtml(final) {

    pokemonContainer.innerHTML = `  <img class="pokemon-image" src="${final.images.small}">
                                    <h2 class="pokeName">${final.name}</h2>
                                    <div class="cardDetails">
                                        <div class="cardStyle">
                                            <h4 class="cardHeading">Attacks</h4>
                                            <p>${final.attacks[0].name}</p>
                                            <p>${final.attacks[1].name}</p>
                                        </div>
                                        <div class="cardStyle">
                                            <h4 class="cardHeading">Rarity</h4>
                                            <p>${final.rarity}</p>
                                        </div>
                                        <div class="cardStyle">
                                            <h4 class="cardHeading">Weaknesses</h4>
                                            <p>Type: ${final.weaknesses[0].type}</p>
                                            <p>Value: ${final.weaknesses[0].value}</p>
                                        </div>
                                    </div>
                                `;

                                    
}


   


