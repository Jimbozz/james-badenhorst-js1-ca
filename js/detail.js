
const pokemonContainer = document.querySelector(".pokemon-details");
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

        for(let i = 0; i < final.weaknesses.length; i++) {
            title.innerHTML = `${final.name}`;
            createHtml(final);
        }
    } 
    
    catch(error) {
        console.log(error);
        pokemonContainer.innerHTML = "";
        errorContainer.innerHTML = displayError("Bad things have happened");
    }
}

pokemonInfo();

function createHtml(final) {

    pokemonContainer.innerHTML = `<img class="pokemon-image" src="${final.images.small}">
                                <div class="cardDetails">
                                    <h2>Name: ${final.name}</h2>
                                    <div>Evolves From:
                                        <p>${final.evolvesFrom}</p>
                                    </div>
                                    <div>Rarity:
                                        <p>${final.rarity}</p>
                                    </div>
                                    <div>Weaknesses:
                                        <p>${final.weaknesses[0].value}</p>
                                        <p>${final.weaknesses[0].type}</p>
                                    </div>
                                </div>
                                `;

                                    
}


   


