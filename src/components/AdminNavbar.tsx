import React from 'react';
import { useHistory } from 'react-router';
import { logout } from '../utilities/authenticationUtils';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../mjlogo.jpg';

function AdminNavbar() {

    const history = useHistory();

    const handleLogout = async () => {
        if (await logout()) {
            history.push("/login");
        } else {
            alert("Login failed, please try again.")
        }
    }


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto" style={{ marginLeft: 20 }}>
                        <Nav.Link>Admin</Nav.Link>
                        <Nav.Link href="/stock/add" style={{ marginLeft: 50 }}>Add New Stock</Nav.Link>
                        <Nav.Link href="/mjinvestments/portfolio" style={{ marginLeft: 80 }}>Portfolio</Nav.Link>
                        {/* <Nav.Link href="/mjinvestments/profile" style={{ marginLeft: 100 }}>Pricing</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/mjinvestments/profile">Account Details</NavDropdown.Item>
                            {/* <NavDropdown.Item href="/mjinvestments/portfolio">Account</NavDropdown.Item> */}
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default AdminNavbar;