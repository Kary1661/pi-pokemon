const { Type } = require('../db.js');
const axios = require('axios');

const allPokeType = async () => {
    try {
        const getTypes = await axios.get('https://pokeapi.co/api/v2/type');
        const pokeType = getTypes.data.results.map((type) => {
            return {
                name: type.name,
            };
        });
        const dbType = pokeType.map((type) => {
            return Type.findOrCreate({
                where: {
                    name: type.name,
                },
            });
        });
        return dbType;
    } catch (error) {
        res.status(500).json(error.message);
    }
}
module.exports = {allPokeType};