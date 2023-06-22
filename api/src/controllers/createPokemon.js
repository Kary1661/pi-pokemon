const { Pokemon } = require('../db.js');

const image = "https://upload.wikimedia.org/wikipedia/commons/3/39/Pokeball.PNG";
const regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

const createPokemon = async (pokemon) => {
    const repeated1 = await Pokemon.findAll({where: { name: pokemon.name }})
    if(repeated1.length) throw Error("Pokemon already created")
    if(pokemon.image !== "" && !regexImage.test(pokemon.image)) throw Error("invalid image")
    if(pokemon.image === "" || pokemon.image === null || pokemon.image === undefined) pokemon.image = image;
    if(Number(pokemon.speed) <= 0) pokemon.speed = null;
    if(Number(pokemon.height) <= 0) pokemon.height = null;
    if(Number(pokemon.weight) <= 0) pokemon.weight = null;
    if(Number(pokemon.hp > 300)) throw Error("max hp")
    if(Number(pokemon.attack > 200)) throw Error("max attack")
    if(Number(pokemon.defense > 200)) throw Error("max defense")
        if(!pokemon.types.length) throw Error("need at least one type");
        if(pokemon.types.length > 3) throw Error("max types");

        const newPokemon = await Pokemon.create(pokemon);
        await newPokemon.addType(pokemon.types)
        return newPokemon;
}
module.exports = {createPokemon};