import React from 'react';
import s from './projects.module.scss'
import generalContainer from '../../common/styles/container.module.scss'
import Project from "./Project/Project";
import {Title} from "../../common/title/Title";
import todoImage from '../../common/icons/todo-list.jpg'
import socialNetworkImage from '../../common/icons/social-network.jpg'
import counter from '../../common/icons/counter.JPG'

const Projects = () => {
    return (
        <div id={'projects'} className={s.projectBlock}>
            <div className={`${generalContainer} ${s.container}`}>
                <div className={s.title}>
                    <Title title={'My Projects'}/>
                </div>
                <div className={s.projects}>
                    <Project
                        linkcode={'https://github.com/knuckless0231/todoList.git'}
                        link={'https://www.google.com/?&bih=829&biw=1730&hl=ru'}
                        title={'Todo List'} description={'Miami'}
                        img={todoImage}/>
                    <Project
                        linkcode={'https://github.com/knuckless0231/way-of-samurai-ts-upd.git'}
                        link={'https://knuckless0231.github.io/login'}
                        title={'Social Network'} description={'Miami'}
                        img={socialNetworkImage}/>
                    <Project
                        linkcode={'https://github.com/knuckless0231/todoList.git'}
                        link={'https://www.google.com/?&bih=829&biw=1730&hl=ru'}
                        title={'Rick and Morty'} description={'Miami'}
                        img={'https://ae01.alicdn.com/kf/HTB1O8U9ANSYBuNjSspjq6x73VXaG/DC-418-14-rick-morty.jpg'}/>
                    <Project
                        linkcode={'https://github.com/knuckless0231/Counter.git'}
                        link={'https://www.google.com/?&bih=829&biw=1730&hl=ru'}
                        title={'Counter'} description={'Stack:Redux,Thunk,Unit-Test,Local Storage'}
                        img={counter}/>
                </div>
            </div>
        </div>
    );
};
export default Projects;