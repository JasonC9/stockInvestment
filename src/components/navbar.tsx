import React from 'react';
import { useHistory } from 'react-router';
import { logout } from '../utilities/authenticationUtils';
import { HomeLogo, Button, Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Testing } from './NavbarElements';

function Navbar() {

    const history = useHistory();

    const handleLogout = async () => {
        if (await logout()) {
            history.push("/login");
        } else {
            alert("Login failed, please try again.")
        }
    }


    return (
        <div>
            <Nav>
                <NavBtn>
                    <NavBtnLink to='/mjinvestments/portfolio'>Profile</NavBtnLink>
                </NavBtn>
                <Bars />
                <NavMenu>
                    <HomeLogo />
                    <NavLink to="/mjinvestments/home">Home</NavLink>
                    <NavLink to="/mjinvestments/portfolio">My Portfolio</NavLink>
                    <NavLink to="/">Third</NavLink>
                    <Button onClick={handleLogout}> Logout </Button>
                </NavMenu>
            </Nav>
        </div>
    )
}
export default Navbar;