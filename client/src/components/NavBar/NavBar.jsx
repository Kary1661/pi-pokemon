import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../Search/SearchBar";
import logo from "../../assets/pokeLogo.png"

const NavBar = () => {
    return(
        <div className={style.mainContainer}>
            <nav className={style.navbar}>
                <div className={style.logo}><NavLink to="/home"><img src={logo} alt="logo"></img></NavLink></div>
                <div className={style.navLinks}>
                <SearchBar/>
                </div>
            </nav>
        </div>
    )
}

export default NavBar