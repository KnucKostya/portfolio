import styled from 'styled-components';
import {FaRegWindowClose} from "react-icons/fa";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.primaryDarkBlue};
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #a4a4a4;
    text-decoration: none;
    transition: color 0.3s linear;
    white-space: nowrap;
    &:hover{
      color: #727171;
    }
  }`;



export const CloseIcon = styled(FaRegWindowClose)`
  color: #a4a4a4;
  position: fixed;
  top: 25%;
  font-size: 50px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #727171;
  }

  @media (max-width: 375px) {
    top: 28%
  }

`

