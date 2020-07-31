let namePoke = document.getElementById('namePoke')
let imgFront = document.getElementById('front')
let imgBack = document.getElementById('back')

//https://pokeapi.co/api/v2/pokemon/132/
//-----          URL BASE ----------/iformacion-pokemon
const url = 'https://pokeapi.co/api/v2/pokemon?limit=50'

const dataPokemons = () => {
    fetch(url)
    .then(response => response.json())
    .then((allPokemon)=> {
        console.log(allPokemon)
        // allPokemon.result.forEach((pokemon) => {
        //     fetchPokemonData(pokemon)
        // })
    })
}

dataPokemons()


const dataPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then(response => response.json())
    .then((Pokemon)=> {
        console.log(Pokemon)
        // allPokemon.result.forEach((pokemon) => {
        //     fetchPokemonData(pokemon)
        // })
    })
}
dataPokemon()

// const fetchPokemonData = (pokemon) => {
//     let urlP = pokemon.url
//     fetch(urlP)
//     .then(response => response.json)
//     .then((pokeData) => {
//       console.log(pokeData)
//     })
// }

// const renderPokemon = () => {

// }
// dataPokemon()