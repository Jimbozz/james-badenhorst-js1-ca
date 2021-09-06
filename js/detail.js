
const pokemonContainer = document.querySelector(".pokemon-details");
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
    
        createHtml(final);
      
        console.log(final);
    } 
    
    catch(error) {
        console.log(error);
    }
}

pokemonInfo();

function createHtml(final) {

    pokemonContainer.innerHTML = `<img class="pokemon-image" src="${final.images.small}">
                                <div class="cardDetails">
                                    <h2>Name: ${final.name}</h2>
                                    <div>Evolves From: ${final.evolvesFrom}</div>
                                    <div>Rarity:${final.rarity}</div>
                                    <div>Weaknesses:${final.weaknesses.type}</div>
                                </div>
                                `;

                                    
}