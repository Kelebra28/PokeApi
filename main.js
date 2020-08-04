//https://pokeapi.co/api/v2/pokemon/132/
//-----          URL BASE ----------/iformacion-pokemon
const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'
let generateBtn = document.getElementById('gerate-pokemon')
let allPokemonContainer = document.getElementById('poke-container') 

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
        makePokemon(pokeData)
    })
}

const makePokemon = (pokeData) => {

    let pokeContainer = document.createElement('div')

    let pokeName = document.createElement('h4')
    pokeName.innerHTML = pokeData.name

    let pokeNumber = document.createElement('p')
    pokeNumber.innerHTML = '#' + pokeData.id

    pokeContainer.append(pokeName, pokeNumber)

    allPokemonContainer.appendChild(pokeContainer)

}


const makeEverything = () => {
    fetchPokemons()
}

generateBtn.addEventListener('click', makeEverything)