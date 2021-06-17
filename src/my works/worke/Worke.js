import React from 'react';
import style from './Worke.module.css';


function Work(props) {
    return (
        <div className={style.workBlock}>
            <div className={style.worke}>
                <a href={''} className={style.ingIcon}>LOOK</a>
            </div>

            <h3 className={style.description}>{props.title}</h3>

            <span className={style.description}>{props.discription}</span>
        </div>
    );
}

export default Work;
