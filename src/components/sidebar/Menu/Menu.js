import React from 'react';
import {bool} from 'prop-types';
import {CloseIcon, StyledMenu} from './Menu.styled';
import { Link } from "react-scroll";

const Menu = ({open, setOpen,...props}) => {

    const isHidden = open ? true : false;
    const onClose = () => {
        setOpen(false)
    }

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <CloseIcon onClick={onClose}/>

            <Link to="services"
                  smooth={true}
                  duration={700}
                  offset={-60}
                  onClick={onClose}>
                My Services
            </Link>
            <Link to="projects"
                  smooth={true}
                  duration={700}
                  offset={-60}
                  onClick={onClose}>
                My Projects
            </Link>
            <Link to="hire"
                  smooth={true}
                  duration={700}
                  offset={-300}
                  onClick={onClose}>
                Hire Me
            </Link>


        </StyledMenu >
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;
