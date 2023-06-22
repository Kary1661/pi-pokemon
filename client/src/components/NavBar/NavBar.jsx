import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../Search/SearchBar";
import pokeLogo from "../../assets/pokeLogo.png"

const NavBar = () => {
    return(
        <div className={style.mainContainer}>
            <nav className={style.navbar}>
                <div className={style.logo}><NavLink to="/home"><img src={pokeLogo} alt="logo"></img></NavLink></div>
                <div className={style.containerLink}>
                    <NavLink to="/create" className={style.link}>Create Pokemon</NavLink>
                    <NavLink to="/" className={style.link}>Logout</NavLink>
                    <SearchBar/>
                </div>
            </nav>
        </div>
    )
}

export default NavBar