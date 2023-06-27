import React from 'react';
import s from './footer.module.scss'
import generalContainer from "../../common/styles/container.module.scss";
import InstImg from '../../common/icons/instagram.png'
import TelegramImg from '../../common/icons/telegram.png'
import LinkImg from '../../common/icons/linkedin.PNG'
import gitFooter from '../../common/icons/gitFooter.png'
import Fade from 'react-reveal/Fade';

const Footer = () => {

    return (
        <div className={s.footerBlock}>
            <div className={`${generalContainer.container} ${s.container}`}>
                <Fade left>
                    <h1 className={s.titleFooter}>Let’s work together</h1>
                </Fade>
                <Fade right>
                    <div className={s.iconsBlock}>
                        <a href="https://t.me/knucknuck" className={s.linkIcon}>
                            <img src={TelegramImg} className={s.icon} alt=""/></a>
                        <a href="https://instagram.com/knuckless_dev?igshid=OGQ5ZDc2ODk2ZA==" className={s.linkIcon}>
                            <img src={InstImg} className={s.icon} alt=""/></a>
                        <a href={`https://www.linkedin.com/in/%D0%BA%D0%BE%D1%81%D1%82%D1%8F-%D0%BA%D0%BE%D1%85%D0%B0%D0%BD%D0%BE%D0%B2-776440245`}
                           className={s.linkIcon}>
                            <img src={LinkImg} className={s.icon} alt=""/></a>
                        <a href="https://github.com/KnucKostya" className={s.linkIcon}>
                            <img src={gitFooter} className={s.icon} alt=""/></a>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Footer;