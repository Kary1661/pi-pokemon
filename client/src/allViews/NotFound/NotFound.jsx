import style from '../NotFound/NotFound.module.css';
import {NavLink} from 'react-router-dom';
import bigpikachu from '../../assets/NotFound.jpg';

const NotFound = () => {
    return(
        <div className={style.container}>
            <div className={style.notFound}>
                <h1>404</h1>
                <p>Page not found</p>
                <img src={bigpikachu}
                alt="not found"
                className={style.img}
                />
                <NavLink to='/home'><button>Go home</button></NavLink>
            </div>
        </div>
    )
}

export default NotFound;