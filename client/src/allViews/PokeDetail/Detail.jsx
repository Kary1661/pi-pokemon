import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import { getPokemonById } from "../../Redux/actions";
import { clearDetail } from "../../Redux/actions";
import style from "../PokeDetail/Detail.module.css";


const Detail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const pokemon = useSelector(state => state.detail)
    const types = useSelector(state => state.types)

    useEffect(() => {
        dispatch(getPokemonById(id))
        return () => {
            dispatch(clearDetail())
        }
    }, [dispatch, id])

    return (
        <div className={style.detail}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt={pokemon.name}/>
            <h3>Types:</h3>
            <div className={style.type}>
                {pokemon.types?.map((type, index) => {
                    return <p key={index}>{type}</p>
                })}
            </div>
            <h3>HP: {pokemon.hp}</h3>
            <h3>Attack: {pokemon.attack}</h3>
            <h3>Defense: {pokemon.defense}</h3>
            <h3>Speed: {pokemon.speed}</h3>
            <h3>Height: {pokemon.height}</h3>
            <h3>Weight: {pokemon.weight}</h3>
            <NavLink to="/home">
                <button>Back</button>
            </NavLink>
        </div>
    )
}

export default Detail