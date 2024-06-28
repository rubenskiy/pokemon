
//const pokemonName = document.getElementById("pokemonName");



const pokemonWeight = document.getElementById("weight");

async function getPokeData() {
    try{
        //const pokemonName = document.getElementById("pokemonName");
        
        const pokemonName = 'pikachu'
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        
        if(!response.ok){
            throw new Error("Pokemon not found");
        }

        const data = await response.json();

        // pokemonWeight.textContent = `Weight: ${data.weight}`;
        
        // const pokemonSprite = data.sprites.front_default;

        // const imgElement = document.getElementById("pokemonSprite");
        
        // imgElement!.style.display = "block";

    }
    catch(error){
        console.log(error);
    }
}

document.querySelector("search_button")!.addEventListener("click", getPokeData)

getPokeData();