import React from 'react';
import s from './button.module.scss'

export const Button = (props) => {
    return (
        <div>
            <button className={s.btn} onClick={props.callback}>{props.title}</button>
        </div>
    );
};

