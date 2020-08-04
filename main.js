
//https://pokeapi.co/api/v2/pokemon/132/
//-----          URL BASE ----------/iformacion-pokemon
const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'
let generateBtn = document.getElementById('gerate-pokemon') 

const fetchPokemons = () => {
    fetch(url)
    .then(response => response.json())
    .then((allPokemon)=> {
        console.log(allPokemon)
        allPokemon.results.forEach( pokemon => {
            fetchPokemonData(pokemon)
        });
    })
}


const fetchPokemonData = (pokemon) => {
    let urlPoke = pokemon.url
    fetch(urlPoke)
    .then(response => response.json())
    .then((pokeData) => {
        console.log(pokeData)
    })
}


const makeEverything = () => {
    fetchPokemons()
}

generateBtn.addEventListener('click', makeEverything)