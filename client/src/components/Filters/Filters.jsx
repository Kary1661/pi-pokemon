import { useEffect, useState } from "react";
import { clearOrder, getAllTypes, orderByName, orderByAttack, createPokemon } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from './Filters.module.css';


const Filters = ({ setCurrentPage }) => {
     
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
    
    const handelClear = () => {
        dispatch(clearOrder());
        setCurrentPage(0)
    }

    const handelTypes = (e) => { 
        dispatch(getAllTypes(e.target.value));
    }
    
    const handelNameOrder = (e) => {
        dispatch(orderByName(e.target.value));
        setCurrentPage(0)
    }

    const handelAttackOrder = (e) => {
        dispatch(orderByAttack(e.target.value));
        setCurrentPage(0)
    }

    const handelCreate = (e) => {
        dispatch(createPokemon(e.target.value));
        setCurrentPage(0)
    }

    
    return (
        <div className={style.container}>
        <button onClick={handelClear} className={style.filterButton} >Clear filters</button>
        <select onChange={handelAttackOrder} className={style.filterButton}>
            <option disabled selected>order pokemons</option>
            <option value="asc">ascendente</option>
            <option value="des">descendente</option>
        </select>
        <select onChange={handelNameOrder} className={style.filterButton}>
            <option disabled selected>order by name</option>
            <option value="asc">A-Z</option>
            <option value="des">Z-A</option>
        </select>
        <select onChange={handelCreate}  className={style.filterButton} >
            <option value="all">All pokemons</option>
            <option value="api">Existing pokemons</option>
            <option value="created">Created pokemons</option>
        </select>
        <select  onChange={handelTypes} className={style.filterButton}>
            <option value="all">Select one Poke-Type </option>
            <option value="fire">Fire</option>
            <option value="normal">Normal</option>
            <option value="ground">Ground</option>
            <option value="fairy">Fairy</option>
            <option value="electric">Electric</option>
            <option value="grass">Grass</option>
            <option value="poison">Poison</option>
            <option value="flying">Flying</option>
            <option value="water">Water</option>
            <option value="bug">Bug</option>
        </select>
    </div>

    );
}
export default Filters;


