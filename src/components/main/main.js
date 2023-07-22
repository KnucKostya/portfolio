import React from 'react';
import s from './main.module.scss'
import generalContainer from '../../common/styles/container.module.scss'
import photo from '../../common/photo/photo.jpg'
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