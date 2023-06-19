import { NavLink } from "react-router-dom";
import styles from "../Landing/Landing.module.css"
import Pokeball from "../../assets/Pokeball.jpg"

const Landing = () => {
    return(
        <div className={styles.background}>
            <div className={styles.container}>
            <div className={styles.pokeballContainer}>
                <div className={styles.pokeball}>
                <NavLink to="/home"><img src={Pokeball} alt="Pokeball"/></NavLink>
                 </div>
            </div>
            <h1>Catch all Pokemons!</h1>
            </div>
        </div>
    )
}

export default Landing