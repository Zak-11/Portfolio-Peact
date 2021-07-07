import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "../common/Project/Project";

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Project value = {'Diana Zak'}/>

                <div className={style.footerSocialBlock}>
                   <div className={style.footerSocial}>

                   </div>
                    <div className={style.footerSocial}>

                    </div>
                    <div className={style.footerSocial}>

                    </div>
                    <div className={style.footerSocial}>

                    </div>
                </div>
                <div>
                <footer className={style.footer}>© 2021 All rights reserved.</footer>
            </div>
            </div>
        </div>
    )

}
