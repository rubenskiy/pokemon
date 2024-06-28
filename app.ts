
const pokemonHeight = document.getElementById("height");
const pokemonWeight = document.getElementById("weight");
//const pokemonPicture = document.getElementById("poke-pic");


async function getPokeData() {
    try{
        //const pokemonName = document.getElementById("pokemonName");

        const pokemonName = 'pikachu'
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        
        if(!response.ok){
            throw new Error("Pokemon not found");
        }

        const data = await response.json();

        //pokemonWeight.textContent = `Weight: ${data.weight}`;
        // pokemonHeight.textContent = `Height: ${data.height}`;
    
       

        console.log(data)

    }
    catch(error){
        console.log(error);
    }
}

//document.querySelector("search_button")!.addEventListener("click", getPokeData)

