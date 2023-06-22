const { getPokemonsById } = require('../controllers/getPokemonsById');

const pokemonHandelById = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(Number(id)) ? "bdd" : "api";
    try {
        const pokemon = await getPokemonsById(id, source);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = pokemonHandelById;