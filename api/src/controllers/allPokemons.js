const { Pokemon, Type } = require('../db');
const getApiData = require('./getApiData');

const allPokemons = async () => {
    //API
    const apiPokemons = await getApiData();
  
    //DB
    let dbPokemons = await Pokemon.findAll({include: {
        attributes: ["name"],
        model: Type,
        through: {
        attributes: [], 
        },
      },});

      if(dbPokemons){
        dbPokemons = dbPokemons.map((pokemon) => {
          pokemon = JSON.parse(JSON.stringify(pokemon));
          pokemon.types = pokemon.types.map(t => t.name);
          return pokemon;
        })
      }

    return [...dbPokemons, ...apiPokemons];
}

module.exports = {allPokemons};