import axios from "axios";

export const getAllPokemons = () => {
    return async (dispatch) => {
        
        const pokemon = await axios.get("http://localhost:3001");
        return dispatch
        ({type: "GET_ALL_POKEMONS", payload: pokemon.data})
    }
}

export const getAllTypes = () => {
    return async (dispatch) => {
        try {
        const byTypes = await axios.get("https://localhost:3001/types");
        return dispatch
        ({type: "GET_ALL_TYPES", payload: byTypes.data})
    } catch (error) {
        console.log(error)
    }
   }
}

export const getPokemonById = (id) => {
    return async(dispatch) => {
        try {
        const pokemonDetail = await axios.get("http://localhost:3001/pokemons/" + id);
        return dispatch({
            type: "GET_POKEMON_BY_ID", 
            payload: pokemonDetail.data})
    } catch (error) {
    console.log("fail to load id")
    }
   }
}

export const getPokemonByName = (name) => {
    return async (dispatch) =>{
        try {
            const pokemonName= await axios.get("http://localhost:3001/pokemons/name?=" + name)
            return dispatch({
                type: "GET_POKEMON_BY_NAME", payload: pokemonName.data})
        } catch (error) {
            console.log(error)
        }
    }
}

export const createPokemon = (pokemon) => {
    return async (dispatch) => {
        let payload = await axios.post("http://localhost:3001/pokemons", pokemon)
        return dispatch({
            type: "CREATE_FILTER", 
            payload})
    }
}

export const orderByName = (order) => {
    return {type: "ORDER_BY_NAME", payload: order}
}

export const orderByAttack = (order) => {
    return {type: "ORDER_BY_ATTACK", payload: order}
}

export const filterAll = (type, source) => {
    return {type: "FILTER_ALL", payload: {type: type, source: source}}
}

export const clearDetail = () => {
    return {type: "CLEAR_DETAIL"}
}

export const clearOrder = () => {
    return {type: "CLEAR_ORDER"}
};
