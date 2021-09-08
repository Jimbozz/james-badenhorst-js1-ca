const url = "https://api.pokemontcg.io/v2/cards/";


const loader = document.querySelector(".loader");
const errorContainer = document.querySelector(".errorContainer");
const detailsContainer = document.querySelector(".details");



async function callApi() {

    try {
        const response = await fetch(url);
        const result = await response.json();
        const details = result.data;
        const final = details

        console.log(final);

        
        detailsContainer.innerHTML = "";
        

        for(let i = 0; i < final.length; i++) {
            
            
            detailsContainer.innerHTML += `<a class="result"  href="/details.html?id=${final[i].id}">
                                            <img class="details-image" src="${final[i].images.small}">
                                            <h3>${final[i].name}</h3>
                                            <p>HP: ${final[i].hp}</p>
                                            <p>Type: ${final[i].types}</p>
                                        </a>`;

        }
    } 
    
    catch(error) {
        console.log(error);
        detailsContainer.innerHTML = "";
        errorContainer.innerHTML = displayError("Bad things have happened");
    }
   
}

callApi();


