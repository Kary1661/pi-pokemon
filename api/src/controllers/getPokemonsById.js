const URL = 'https://pokeapi.co/api/v2/pokemon'
const axios = require('axios');

const getPokemonsById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.get(`${URL}/${id}`)
        
        const pokemon = {
            id: data.id,
            name: data.name,
            attack: data.stats[1].base_stat,
            life: data.stats[0].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
            image: data.sprites.other.dream_world.front_default,
        }
       return pokemon.name 
       ? res.status(200).json(pokemon)
       : res.status(404).send('Not found')                 
    } catch (error) {
        res.status(500).json(error.message);
    }
}
module.exports = {getPokemonsById};
