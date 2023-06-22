import { NavLink } from "react-router-dom";
import style from "./PokeCard.module.css";
import types from "./types.module.css";


const PokeCard = (props) => {
    let color = props.types[0];
    if(props.types.length > 1 && color === "normal") color = props.types[1];
    
    return (
        <div key={props.id} className={style.card}>
        <div className={`${style.header} ${types[color]}`}></div>
        <NavLink to={`/pokemon/${props.id}`}>
            <img src={props.image} alt="pokemon" />
        </NavLink>
        <div className={StyleSheet.pokemonInfo}>
        <h3 className={style.name}>{props.name.toUpperCase()}</h3>
        <div className={style.types}>
        {props.types.map((type, index) => { 
            return <div className={`${types[color]} ${style.type}` }key={index}>{type}</div>
            })}
            </div>
        </div>
        </div>
    );   
};
export default PokeCard;