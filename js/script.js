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
            
            if(!final[i].weaknesses) {
                continue;
            }

            detailsContainer.innerHTML += `<a class="result"  href="/details.html?id=${final[i].id}">
                                            <img src="${final[i].images.small}" alt="${final[i].name}">
                                            <h3>${final[i].name}</h3>
                                            <p><b>HP:</b> ${final[i].hp}</p>
                                            <p><b>Type:</b> ${final[i].types}</p>
                                        </a>`;

        }
    } 
    
    catch(error) {
        console.log(error);
        detailsContainer.innerHTML = "";
        errorContainer.innerHTML = displayError("An unexpected error occured." + " " + error);
    }
   
}

callApi();


