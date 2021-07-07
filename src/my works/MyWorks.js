import React from 'react';
import style from './MyWorks.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Work from "./worke/Worke";
import {Project} from "../common/Project/Project";


function MyWorks() {
    return (
        <div className={style.myBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
               <Project value = {'My Work'} />
                <div className={style.works}>

                    <Work title={'Social network'}
                          discription={'An online platform that is used for communication,' +
                          ' dating, social relations between people who have interests or offline connections, as well as for' +
                          ' entertainment (music, films) and work.'}/>
                    <Work title={'Todolist'}
                          discription={'\n' +
                          'Todoist is a web service and suite of task management software. Tasks can also contain stuffed notes.' +
                          ' Tasks can be placed in projects, sorted by filters, labeled, edited and exported.'}/>
                </div>
            </div>
        </div>

    );
}

export default MyWorks;
