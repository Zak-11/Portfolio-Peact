import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "../common/Project/Project";

export function Contacts () {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Project value = {'Contacts'}/>
             {/*   <h2 className={style.titleContacts}>Contacts</h2>*/}
                <div className={style.contacts}>
                 <form className={style.form}>
                     <input />
                     <input/>
                     <textarea></textarea>

                 </form>
                </div>
                    <button className={style.sentIcon}>Send</button>


            </div>
        </div>
    )

}
