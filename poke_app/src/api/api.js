

const api="https://pokeapi.co/api/v2/pokemon/"
 let randomNum= Math.floor(Math.random() * 1000 ) +1 ;
 async function fetchRandomPokemon(num){
   

    const response=  await fetch(`${api}${randomNum}`);
    console.log(typeof(response))
    const pokeData= await response.json();
    
    return pokeData;
    

}

async function getColour(){
    const response= await fetch(`https://pokeapi.co/api/v2/pokemon-color/${randomNum}`)
    const pokeData= await response.json();

    console.log(pokeData.name)
}

export default fetchRandomPokemon;