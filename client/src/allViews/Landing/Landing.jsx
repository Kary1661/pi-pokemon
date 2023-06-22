import { NavLink } from "react-router-dom";
import style from "../Landing/Landing.module.css"
import pokeLanding from "../../assets/pokeLanding.png"

const Landing = () => {
    return(
        <div className={style.background}>
            <div className={style.container}>
            <div className={style.pokeContainer}>
                <div className={style.pokeball}>
                <NavLink to="/home"><img src={pokeLanding} alt="pokeLanding"/></NavLink>
                 </div>
            </div>
            <h1>Catch 'em all!</h1>
            </div>
        </div>
    )
}

export default Landing