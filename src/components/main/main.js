import React from 'react';
import s from './main.module.scss'
import generalContainer from '../../common/styles/container.module.scss'
import photo from '../../common/photo/img_portf.jpg'
import ReactTypingEffect from 'react-typing-effect';
import Fade from 'react-reveal/Fade';


const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${generalContainer.container}`}>
                <Fade left>
                    <div className={s.textBlock}>
                        <span className={s.mainTitle}>Hello there</span>
                        <h1 className={s.nameTitle}>I'm Kostya Kokhanov,</h1>
                        <ReactTypingEffect
                            text={"I'm front-end developer with experience in creating SPA"}
                            className={s.mainTitle}
                            speed={50}
                            eraseSpeed={5}
                            eraseDelay={2000}
                        />
                    </div>
                </Fade>
                {/*<p className={s.mainTitle}>I'm front-end developer with experience in creating SPA*/}
                {/*    using React, Redux, Typescript, JavaScript, CSS, HTML.*/}
                {/*    I've been good at absorbing information science childhood.*/}
                {/*    I'm continuously improving my English studying new*/}
                {/*    technologies and solving tasks on Codewars in my spare time.*/}
                {/*    I also have analytical skills, responsibility,*/}
                {/*    stress resistance, and initiative.*/}
                {/*    Ready to consider project work and full-time employment.*/}
                {/*</p>*/}
                <Fade right>
                    <div>
                        <img src={photo} className={s.ava} alt="portfolio_photo"/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Main;