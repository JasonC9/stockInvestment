import React from 'react';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,Testing} from './NavbarElements';

function Navbar()
{
    return(
        <div>
            <Nav>
                <NavLink to="/mjinvestments/home"></NavLink>
                <Testing>MJ Investments</Testing>
            <Bars />
            <NavMenu>
            <NavLink to="/mjinvestments/home">Home</NavLink>
            <NavLink to="/mjinvestments/portfolio">My Portfolio</NavLink>
            <NavLink to="/">Third</NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/profile'>Profile</NavBtnLink>
            </NavBtn>
            </Nav>
        </div>
    )
}
export default Navbar;