import React from 'react';
import s from './distanceWorkBlock.module.scss'
import generalContainer from '../../common/styles/container.module.scss'
import {Title} from "../../common/title/Title";
import Contacts from "../contacts/Contacts";
import Fade from 'react-reveal/Fade';


const DistanceWorkBlock = () => {

    return (
        <div id={'hire'} className={s.distance}>
            <div className={`${generalContainer.container} ${s.container}`}>
                <div className={`${generalContainer.container} ${s.insideContainer}`}>
                    <Fade top>
                        <Title title={'Looking into remote work options'}/>
                    </Fade>
                    <Contacts/>
                </div>
            </div>
        </div>
    );
};

export default DistanceWorkBlock;

