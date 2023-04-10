import React from 'react';
import s from "./project.module.scss";


const Project = (props) => {
    return (
        <div className={s.currentProject}>
            <div className={s.buttonImageContainer}>
                <p className={s.btnUpperText}>CLICK PICTURE and see github deploy</p>
                <a href={props.deploy}> <img src={props.img} className={s.img} alt=""/> </a>
                <a href={props.linkcode} className={s.btnBottomText}>CLICK ME and see github repository</a>
            </div>
            <div className={`${s.buttonImageContainer} ${s.descriptionContainer}`}>
                <div className={s.title}>{props.title}</div>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    );
};

export default Project;