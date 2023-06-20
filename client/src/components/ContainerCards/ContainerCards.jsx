import PokeCard from "../Card/PokeCard";
import style from "./ContainerCards.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Filters from "../Filters/Filters";
import bigpikachu from "../../assets/bigpikachu.jpg";


import PokeCard from "../Card/PokeCard";
import style from "./ContainerCards.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Filters from "../Filters/Filters";
import bigpikachu from "../../assets/bigpikachu.jpg";
import { useLocation } from "react-router-dom";

const ContainerCards = () => {
    const pokemons = useSelector((state) => state.pokemons);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage, setPokemonsPerPage] = useState(20);
    const [currentPokemons, setCurrentPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const orderedPokemons = useSelector((state) => state.orderedPokemons);
    const filteredPokemons = useSelector((state) => state.filteredPokemons);
    const location = useLocation();

    useEffect(() => {
        setCurrentPokemons(pokemons.slice(0, pokemonsPerPage));
        setLoading(false);
    }, [pokemons, pokemonsPerPage]);

    useEffect(() => {
        setCurrentPokemons(orderedPokemons.slice(0, pokemonsPerPage));
        setLoading(false);
    }, [orderedPokemons, pokemonsPerPage]);

    useEffect(() => {
        setCurrentPokemons(filteredPokemons.slice(0, pokemonsPerPage));
        setLoading(false);
    }, [filteredPokemons, pokemonsPerPage]);


    if (loading || !currentPokemons) {
        return (
            <div className={style.loading}>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (currentPokemons.length === 1) {
        const pokemon = currentPokemons[0];
        return (
            <div>
                <Filters />
                <div>
                    <PokeCard
                        id={pokemon.id}
                        key={pokemon.id}
                        image={pokemon.image}
                        types={pokemon.types}
                        name={pokemon.name}
                    />
                </div>
                <button onClick={() => paginate(currentPage - 1)}>Previous</button>
                <button onClick={() => paginate(currentPage + 1)}>Next</button>
            </div>
        )
    }

    if (typeof currentPokemons[0] === "string") {
        return (
            <div>
                <Filters />
                <div>
                    <h1>Error 404: Not found</h1>
                    <img
                        src={bigpikachu}
                        alt="bigpikachu"
                        className={style.bigpikachu}
                    />
                </div>
                <button onClick={() =>
                    location.replace("http://localhost:3000/home")}>Go back</button>
            </div>
        )
    }

    const pageSize = 20;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pokemonsToDisplay = currentPokemons.slice(startIndex, endIndex);
    const totalPages = Math.ceil(currentPokemons.length / pageSize);
    const ratioPages = 5;
    let pagination = [];

    const paginate = (number) => {
        if (number < 1 || number > totalPages) return;
        setCurrentPage(number);
    }

    if (totalPages <= ratioPages) {
        for (let i = 1; i <= totalPages; i++) {
            pagination.push(i);
        }
    } else {
        const left = Math.max(currentPage - Math.floor(ratioPages / 2), 1);
        const right = Math.min(left + ratioPages - 1, totalPages);
        for (let i = left; i <= right; i++) {
            pagination.push(i);
        }
    }

    return (
        <div>
            <Filters />
            <div className={style.container}>
                {pokemonsToDisplay.map((pokemon) => {
                    return (
                        <PokeCard
                        id={pokemon.id}
                        key={pokemon.id}
                        image={pokemon.image}
                        types={pokemon.types}
                        name={pokemon.name}
                        />
                    )
                })}
            </div>
            <div className={style.pagination}>
                <button onClick={() => paginate(currentPage - 1)}>Previous</button>
                {pagination.map((number) => {
                    return (
                        <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={currentPage === number ? style.active : null}
                        >
                            {number}
                        </button>
                    )
                })}
                <button onClick={() => paginate(currentPage + 1)}>Next</button>
            </div>
        </div>
    )
}


export default ContainerCards; 
