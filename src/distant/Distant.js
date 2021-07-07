import React from 'react';
import style from './Distant.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "../common/Project/Project";

export function Distant () {
    return (
        <div className={style.distantBlock}>
            <div className={`${styleContainer.container} ${style.distantContainer}`}>
                <Project value = {'I am considering options for remote work.'}/>

                <div className={style.distant}>


                    <button className={style.ingIcon}>Hire me to work.</button>
                        </div>

            </div>
        </div>
    )

}
