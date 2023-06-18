import { NavLink } from "react-router-dom";
import style from "./PokeCard.module.css";

const PokeCard = (props) => {
    return (
        <div className={style.card}>
        <NavLink to={`/pokemon/${props.pokemon.id}`}>
            <img src={props.pokemon.image} alt="pokemon" />
        </NavLink>
        <div className={style.container}>
            <h4>
            <b>{props.pokemon.name}</b>
            </h4>
            <p>
            {props.pokemon.types.map((type) => (
                <span className={style.types}>{type.name}</span>
            ))}
            </p>
        </div>
        </div>
    );   
};
export default PokeCard;