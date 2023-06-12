const axios = require('axios');

const pokeapi = async () => {
    try {
        const pokemonInApi = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40');
        return pokemonInApi.data.results.map((pokemon) => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                hp: pokemon.hp,
                attack: pokemon.attack,
                defense: pokemon.defense,
                speed: pokemon.speed,
                height: pokemon.height,
                weight: pokemon.weight,
                image: pokemon.image,
                types: pokemon.types.map((type) => type.name),
            };
        });
        return pokemonInApi;
    } catch (error) {
        console.log({ error: error.message });
    }
}
module.exports = {pokeapi};