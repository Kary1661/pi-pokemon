const axios = require("axios")

const typesByApi = async () => {
    const types = (await axios("https://pokeapi.co/api/v2/type")).data.results;
    return types;
}

module.exports = typesByApi