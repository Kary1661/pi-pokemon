import React from 'react';
import style from './Loading.module.css';


const Loading = (props) => {
    return (
        <div className={style.loadingContainer} >
            <img src="https://fontmeme.com/permalink/230226/6384de4143f32365825783b8541eceb9.png" alt="loading" />
        </div>
    );
}

export default Loading;