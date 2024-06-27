
const pokemonName = document.getElementById("pokemonName");

async function getPokeData() {
    try{
        const pokemonName = document.getElementById("pokemonName");

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("Resource not found");
        }

        const data = await response.json();
        
        console.log(data)

        


    }
    catch(error){
        console.log(error);
    }
}