import React from 'react';
import s from './services.module.scss'
import generalContainer from '../../common/styles/container.module.scss'
import Service from "./service/Service";
import {Title} from "../../common/title/Title";
import jsImg from '../../common/icons/js.png'
import htmlImg from '../../common/icons/html.png'
import cssImg from '../../common/icons/css.jpg'
import gitHubImg from '../../common/icons/gitHub.png'
import TddImg from '../../common/icons/tdd.jpg'
import UnitImg from '../../common/icons/unit.png'
import APIImg from '../../common/icons/restApi.png'
import MaterialImg from '../../common/icons/material.png'
import StorybookImg from '../../common/icons/story.png'
import ReduxImg from '../../common/icons/redux.jpg'
import ReactImg from '../../common/icons/react.png'
import RTK from '../../common/icons/rtk.jpg'
import TypeScriptImg from '../../common/icons/ts.png'
import Saas from '../../common/icons/saas.avif'


const Services = () => {
    return (
        <div id={"services"} className={s.skillsBlock} >
            <div className={`${generalContainer.container} ${s.skillsContainer}`}>
                <div className={s.title}>
                    <Title title={'Services'}/>
                </div>
                <div className={s.skills}>
                    <Service title={'HTML'} skill={'Have confident skills'} img={htmlImg}/>
                    <Service title={'CSS'} skill={'Have confident skills'} img={cssImg}/>
                    <Service title={'JS'} skill={'Have confident skills'} img={jsImg}/>
                    <Service title={'TypeScript'} skill={'Have confident skills'} img={TypeScriptImg}/>
                    <Service title={'React'} skill={'Have confident skills'} img={ReactImg}/>
                    <Service title={'Storybook'} skill={'Have confident skills'} img={StorybookImg}/>
                    <Service title={'TDD'} skill={'Have confident skills'} img={TddImg}/>
                    <Service title={'Unit Test'} skill={'Have confident skills'} img={UnitImg}/>
                    <Service title={'REST API'} skill={'Have confident skills'} img={APIImg}/>
                    <Service title={'Material-UI'} skill={'Have confident skills'} img={MaterialImg}/>
                    <Service title={'Redux'} skill={'Have confident skills'} img={ReduxImg}/>
                    <Service title={'Redux Tool Kit'} skill={'Have confident skills'} img={RTK}/>
                    <Service title={'GitHub'} skill={'Have confident skills'} img={gitHubImg}/>
                    <Service title={'Saas'} skill={'Have confident skills'} img={Saas}/>
                </div>
            </div>
        </div>
    );
};

export default Services;