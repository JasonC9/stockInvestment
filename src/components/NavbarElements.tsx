import { NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';

export const Nav=styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    `
    export const NavLink=styled(Link)`
    color: #fff;
    display: flex;
    align-items:center;
    text-decoration: none;
    padding: 4rem;
    height: 100%;
    cursor: pointer;
    padding-left: 60px;
    &.active{
        color: #15cdfc;
        font-size: 24px;
    }
    `
    export const Bars = styled(FaBars)`
        display:none;
        color:#
        fff;
    `
    export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    `
    export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    margin-right: 24px;
    `
    export const NavBtnLink=styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border:none;
    outline:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    `
    export const Testing = styled.h1`
    font-weight: normal;
    font-style: italic;
    color: #15cdfc;
    font-size: 24px;
  `;