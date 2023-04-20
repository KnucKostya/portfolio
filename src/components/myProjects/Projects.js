import React from 'react';
import s from './projects.module.scss'
import generalContainer from '../../common/styles/container.module.scss'
import Project from "./Project/Project";
import {Title} from "../../common/title/Title";
import todoImage from '../../common/icons/todo-list.jpg'
import socialNetworkImage from '../../common/icons/social-network.jpg'
import counter from '../../common/icons/counter.JPG'
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
                        linkcode={''}
                        deploy={''}
                        title={'Todo List'} description={'Stack: TS, RTK, Thunk, Unit-Test, API'}
                        img={todoImage}/>
                    <Project
                        linkcode={'https://github.com/KnucKostya/way-of-samurai-ts-upd.git'}
                        deploy={'https://knuckostya.github.io/way-of-samurai-ts-upd/'}
                        title={'Social Network'} description={`Stack: TS, Redux, Thunk, Unit-Test, API HOC's`}
                        img={socialNetworkImage}/>
                    <Project
                        linkcode={'https://github.com/KnucKostya/rick_morty_api_pet_project.git'}
                        deploy={'https://knuckostya.github.io/rick_morty_api_pet_project/'}
                        title={'Rick and Morty'} description={'Stack: TS, Redux, Thunk, Unit-Test, API'}
                        img={'https://ae01.alicdn.com/kf/HTB1O8U9ANSYBuNjSspjq6x73VXaG/DC-418-14-rick-morty.jpg'}/>
                    <Project
                        linkcode={'https://github.com/KnucKostya/Counter.git'}
                        deploy={'https://knuckostya.github.io/Counter/'}
                        title={'Counter'} description={'Stack: TS, Redux, Thunk, Unit-Test'}
                        img={counter}/>
                </div>
            </div>
        </div>
    );
};
export default Projects;