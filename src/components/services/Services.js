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
import RTKQuery from '../../common/icons/rtkQuery.png'
import TypeScriptImg from '../../common/icons/ts.png'
import Saas from '../../common/icons/saas.avif'
import reactHookForm from '../../common/icons/hookForm.png'
import Fade from 'react-reveal/Fade';


const Services = () => {
    return (
        <div id={"services"} className={s.skillsBlock} >
            <div className={`${generalContainer.container} ${s.skillsContainer}`}>
                    <Fade top>
                        <div className={s.title}>
                        <Title title={'Services'}/>
                        </div>
                    </Fade>
                <div className={s.skills}>
                    <Service title={'HTML'}  img={htmlImg}/>
                    <Service title={'CSS'}  img={cssImg}/>
                    <Service title={'Saas'}  img={Saas}/>
                    <Service title={'JS'}  img={jsImg}/>
                    <Service title={'TypeScript'}  img={TypeScriptImg}/>
                    <Service title={'React'}  img={ReactImg}/>
                    <Service title={'REST API'}  img={APIImg}/>
                    <Service title={'Redux'}  img={ReduxImg}/>
                    <Service title={'Redux Tool Kit'}  img={RTK}/>
                    <Service title={'Redux Tool Kit Query'}  img={RTKQuery}/>
                    <Service title={'Material-UI'}  img={MaterialImg}/>
                    <Service title={'GitHub'}  img={gitHubImg}/>
                    <Service title={'Storybook'}  img={StorybookImg}/>
                    <Service title={'TDD'}  img={TddImg}/>
                    <Service title={'Unit Test'}  img={UnitImg}/>
                    <Service title={'React Hook Form'}  img={reactHookForm}/>
                </div>
            </div>
        </div>
    );
};

export default Services;