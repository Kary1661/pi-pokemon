import axios from "axios";

export const getAllPokemons = () => {
    return async (dispatch) => {
        const apiData = await axios("/pokemons");
        const pokemons = apiData.data;
        
        dispatch({type: "GET_ALL_POKEMONS", payload: pokemons})
    }
}

export const getAllTypes = () => {
    return async (dispatch) => {
        const apiData = await axios("/types");
        const types = apiData.data;
        
        dispatch({type: "GET_ALL_TYPES", payload: types})
    }
}

export const getPokemonById = (id) => {
    return async(dispatch) => {
        const apiData = await axios(`/pokemons/${id}`);
        const pokemon = apiData.data;
        dispatch({type: "GET_POKEMON_BY_ID", payload: pokemon})
    }
}

export const getPokemonByName = (name) => {
    return async (dispatch) =>{
        try {
            const apiData = await axios(`/pokemons?name=${name}`);
            const pokemon = apiData.data

            dispatch({type: "GET_POKEMON_BY_NAME", payload: pokemon})
        } catch (error) {
            dispatch({type: "GET_POKEMON_BY_NAME", payload: error.message})
        }
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
