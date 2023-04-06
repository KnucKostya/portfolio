import React from 'react';
import s from './distanceWorkBlock.module.scss'
import generalContainer from '../../common/styles/container.module.scss'
import {Title} from "../../common/title/Title";
import Contacts from "../contacts/Contacts";


const DistanceWorkBlock = () => {

    return (
        <div id={'hire'} className={s.distance}>
            <div className={`${generalContainer.container} ${s.container}`}>
                <div className={`${generalContainer.container} ${s.insideContainer}`}>
                    <Title title={'Looking into remote work options'}/>
                    <Contacts/>
                </div>
            </div>
        </div>
    );
};

export default DistanceWorkBlock;

