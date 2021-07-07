import style from "../Project/Project.module.css";
import React from "react";

export function Project(props) {
    return (
        <div className={style.titleworks}>
            <h3> {props.value} </h3>
            <span className={style.line}></span>
        </div>)


}
