import React from 'react';
import s from './projects.module.scss'
import generalContainer from '../../common/styles/container.module.scss'
import Project from "./Project/Project";
import {Title} from "../../common/title/Title";
import todoImage from '../../common/icons/todo-list.jpg'
import socialNetworkImage from '../../common/icons/social-network.jpg'
import cardsImage from '../../common/icons/cards.png'
import counter from '../../common/icons/counter.JPG'
import rickMorty from '../../common/icons/rick-morty.jpg'
import Fade from 'react-reveal/Fade';

const Projects = () => {
    return (
        <div id={'projects'} className={s.projectBlock}>
            <div className={`${generalContainer} ${s.container}`}>
                <Fade top>
                    <div className={s.title}>
                        <Title title={'My Projects'}/>
                    </div>                </Fade>

                <div className={s.projects}>
                    <Project
                        linkcode={'https://github.com/KnucKostya/redux-toolkit-todo.git'}
                        deploy={'https://knuckostya.github.io/redux-toolkit-todo/'}
                        title={'Task Tracker'} description={'Stack: React, TS, RTK, Thunk, Material-UI, Unit-Test, API'}
                        img={todoImage}/>
                    <Project
                        linkcode={'https://github.com/KnucKostya/CardTraining.git'}
                        deploy={'https://knuckostya.github.io/CardTraining/#/login'}
                        title={'Learn words by cards'} description={'Stack: React, TS, RTK, Thunk, Material-UI, Unit-Test, API, Saas'}
                        img={cardsImage}/>
                    <Project
                        linkcode={'https://github.com/KnucKostya/way-of-samurai-ts-upd.git'}
                        deploy={'https://knuckostya.github.io/way-of-samurai-ts-upd/'}
                        title={'Social Network'} description={`Stack: React, TS, Redux, Thunk, Classes, OOP, Unit-Test, API HOC's`}
                        img={socialNetworkImage}/>
                    <Project
                        linkcode={'https://github.com/KnucKostya/rick_morty_api_pet_project.git'}
                        deploy={'https://knuckostya.github.io/rick_morty_api_pet_project/'}
                        title={'Rick and Morty'} description={'Stack: React, TS, Redux, Thunk, Unit-Test, API, Local Storage'}
                        img={rickMorty}/>
                    <Project
                        linkcode={'https://github.com/KnucKostya/Counter.git'}
                        deploy={'https://knuckostya.github.io/Counter/'}
                        title={'Counter'} description={'Stack: React, TS, Redux, Thunk, Unit-Test, Local Storage'}
                        img={counter}/>
                </div>
            </div>
        </div>
    );
};
export default Projects;