const { Pokemon } = require('../db.js');

const createPokemon = async (req, res) => {
    try {
        const { name, hp, attack, defense, speed, height, weight, image, types } = req.body;

        const newPokemon = await Pokemon.create({
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            image,
        });

        await newPokemon.addType(types);

        return newPokemon;
    } catch (error) {
        res.status(500).json(error.message);
    }
}
module.exports = {createPokemon};