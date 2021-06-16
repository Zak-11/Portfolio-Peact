import React from 'react';
import style from './Distant.module.css'
import styleContainer from "../common/styles/Container.module.css";

export function Distant () {
    return (
        <div className={style.distantBlock}>
            <div className={`${styleContainer.container} ${style.distantContainer}`}>
                <h2 className={style.titleDistant}>I am considering options for remote work.</h2>
                <div className={style.distant}>


                    <button className={style.ingIcon}>Hire me to work.</button>
                        </div>

            </div>
        </div>
    )

}
