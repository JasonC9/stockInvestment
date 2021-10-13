import React from 'react';
import { useHistory } from 'react-router';
import { logout } from '../utilities/authenticationUtils';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,Testing} from './NavbarElements';

function Navbar() {

    const history = useHistory();

    const handleLogout = async () => {
        if (await logout()) {
            history.push("/login");
        } else {
            alert("Login failed, please try again.")
        }
    }


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
                    <button onClick={handleLogout}> Logout </button>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/profile'>Profile</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}
export default Navbar;