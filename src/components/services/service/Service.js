import React from 'react';
import s from './service.module.scss'



const Service = (props) => {
    return (
        <div className={s.skill}>
            <img src={props.img} className={s.icon} alt={'img'}></img>
            <h3 className={s.title}>{props.title}</h3>
        </div>
    );
};

export default Service;