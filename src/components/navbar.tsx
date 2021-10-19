import React from 'react';
import { useHistory } from 'react-router';
import { logout } from '../utilities/authenticationUtils';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import logo from '../mjlogo.jpg';

function Navb() {

    const history = useHistory();

    const handleLogout = async () => {
        if (await logout()) {
            history.push("/login");
        } else {
            alert("Login failed, please try again.")
        }
    }


    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/mjinvestments/home">
            <img src={logo} style={{height:100,width:400}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto" style={{marginLeft:20}}>
                <Nav.Link href="/mjinvestments/stocktest"style={{marginLeft:40}}>Stocks</Nav.Link>
                <Nav.Link href="/mjinvestments/profile"style={{marginLeft:100}}>Pricing</Nav.Link>
            </Nav>
            <Nav>
            <NavDropdown title="Profile" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/mjinvestments/portfolio">Account Details</NavDropdown.Item>
                    <NavDropdown.Item href="/mjinvestments/portfolio">Account</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item OnClick={logout}>Log Out</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
export default Navb;