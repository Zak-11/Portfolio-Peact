import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                <Skill title={"JS"} discription={'WEB DESIGN\n' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                <Skill title={"CSS"} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed' +
                ' do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
                <Skill title={"REACT"} discription={'MARKETING\n' +
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'}/>
            </div>

            </div>

        </div>
    );
}

export default Skills;
