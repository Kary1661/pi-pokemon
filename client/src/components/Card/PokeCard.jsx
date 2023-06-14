import { NavLink } from "react-router-dom";

const PokeCard = (props) => {
    return (
        <div className="card">
        <NavLink to={`/pokemon/${props.pokemon.id}`}>
            <img src={props.pokemon.image} alt="pokemon" />
        </NavLink>
        <div className="container">
            <h4>
            <b>{props.pokemon.name}</b>
            </h4>
            <p>
            {props.pokemon.types.map((type) => (
                <span className={type.name}>{type.name}</span>
            ))}
            </p>
        </div>
        </div>
    );   
};
export default PokeCard;