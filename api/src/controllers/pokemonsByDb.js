const { Pokemon, Type } = require('../db.js');

const dbPokemons = async () => {
    try {
        const pokemonInDB = await Pokemon.findAll({
            include: Type,
        });
        return pokemonInDB.map((pokemon) => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                hp: pokemon.hp,
                attack: pokemon.attack,
                defense: pokemon.defense,
                speed: pokemon.speed,
                height: pokemon.height,
                weight: pokemon.weight,
                types: pokemon.types.map((type) => type.name),
            };
        });
    } catch (error) {
        console.log({ error: error.message });
    }
}

module.exports = {dbPokemons};