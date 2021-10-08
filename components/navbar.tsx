import React from 'react';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,Testing} from './NavbarElements';

function Navbar()
{
    return(
        <>
            <Nav>
                <NavLink to="/"></NavLink>
                <Testing>Name of Website</Testing>
            <Bars />
            <NavMenu>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Second</NavLink>
            <NavLink to="/">Third</NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/profile'>Profile</NavBtnLink>
            </NavBtn>
            </Nav>
        </>
    )
}
export default Navbar;