import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import { getPokemonById } from "../../Redux/actions";
import { clearDetail } from "../../Redux/actions";
import progressTypes from "./ProgressTypes.module.css";
import types from "./Types.module.css";
import style from "../PokeDetail/Detail.module.css";
import pikaGifRuning from "../../assets/pikaGifRuning.gif";


const Detail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const pokemon = useSelector(state => state.pokemonSelected)
    

    useEffect(() => {
        dispatch(getPokemonById(id))
        return () => {
            dispatch(clearDetail())
        }
    }, [dispatch, id])

    if(!pokemon) {
        return (
            <div className={style.detail}>
                <div className={style.container}>
                    <img style={{width: "25%"}} src={pikaGifRuning} alt="loading"/>
                    <p>Loading pokemon...</p>
                </div>
            </div>
        )
    }

    let color = pokemon?.types[0]
    if(pokemon?.types?.length > 1 && color === "normal") color = pokemon?.types[1]
    
    return(
        <div className={style.detail}>
        <div key={pokemon?.id} className={style.container}>
        <div className={`${style.header} ${types[color]}`}></div>
        <div className={style.pokebola}><img src={pokemon?.alterImage ? pokemon?.alterImage : pokemon?.image} alt={pokemon?.name}/></div>
        <div className={StyleSheet.pokemonInfo}>
        <h3 className={style.name}>{pokemon?.name?.toUpperCase()}</h3>

        <div className={style.types}>
        {pokemon?.types?.map((type, index) => { 
            return <div className={`${types[color]} ${style.type}` }key={index}>{type}</div>
        })}
        </div>

        <div className={style.table}>
            <div className={style.info}>
            <div>
                <label>ID: {pokemon?.id}</label>
                {pokemon?.speed && <label>SPEED: {pokemon?.speed}</label>}
                {pokemon?.height && <label>HEIGHT: {pokemon?.height}</label>}
                {pokemon?.weight && <label>WEIGHT: {pokemon?.weight}</label>}
            </div>

            <div>
            <label>HP:</label>
            <div className={`${style.slides} ${progressTypes[color]}`}>
            <progress id="hp" value={pokemon?.hp} max="300" className={types[color]}></progress>
            <span>{pokemon?.hp}</span>
            </div>
            <label>ATTACK:</label>
            <div className={`${style.slides} ${progressTypes[color]}`}>
            <progress id="attack" value={pokemon?.attack} max="200" className={types[color]}></progress>
            <span>{pokemon?.attack}</span>
            </div>
            <label>DEFENSE:</label>
            <div className={`${style.slides} ${progressTypes[color]}`}>
            <progress id="defense" value={pokemon?.defense} max="200" className={types[color]}></progress>
            <span>{pokemon?.defense}</span>
            </div>
            </div>
            </div>
        </div>

        </div>
    </div>
    <NavLink to="/home"><button>Back Home</button></NavLink>
    </div>
    )
}

export default Detail