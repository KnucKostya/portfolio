import React from 'react';
import s from './title.module.scss'


export const Title = (props) => {
    return (
        <div>
            <h2 className={s.title}>{props.title}</h2>
        </div>
    );
};

