import style from './NotFound.module.css';
import {NavLink} from 'react-router-dom';
import img from '';

const NotFound = () => {
    return(
        <div className={style.container}>
            <div className={style.notFound}>
                <h1>404</h1>
                <p>Page not found</p>
                <img src={img}
                alt="Error"
                className={style.img}
                />
                <NavLink to='/home'><button>Go home</button></NavLink>
            </div>
        </div>
    )
}

export default NotFound;