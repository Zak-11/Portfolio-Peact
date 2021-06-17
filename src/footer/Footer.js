import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.titleFooter}>Diana Zak</h2>
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
