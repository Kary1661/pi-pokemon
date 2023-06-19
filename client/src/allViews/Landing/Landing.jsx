import { NavLink } from "react-router-dom";
import style from "../Landing/Landing.module.css"
import pokeball from "../../assets/pokeball.jpg"

const Landing = () => {
    return(
        <div className={style.background}>
            <div className={style.container}>
            <div className={style.pokeballContainer}>
                <div className={style.pokeball}>
                <NavLink to="/home"><img src={pokeball} alt="pokeball"/></NavLink>
                 </div>
            </div>
            <h1>Catch all Pokemons!</h1>
            </div>
        </div>
    )
}

export default Landing