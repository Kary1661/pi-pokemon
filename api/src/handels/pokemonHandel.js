const allPokemons = require("../controllers/allPokemons");
const getPokemonsByName = require("../controllers/getPokemonsByName");

const pokemonHandel = async (req, res) => {
    const { name } = req.query;
    try {
        let pokemons = [];
        if(!name) pokemons = await allPokemons();
        else pokemons = await getPokemonsByName(name);
        if(!pokemons) return res.status(404).json({error: `Pokemon whit name ${name} not found`})
        return res.status(200).json(pokemons);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
};
  

module.exports = pokemonHandel;