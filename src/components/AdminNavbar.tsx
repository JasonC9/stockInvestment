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
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>

                <Navbar.Brand href="/admin">
                    <img src={logo} style={{ height: 100, width: 400 }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto" style={{ marginLeft: 20 }}>
                        <Nav.Link href="/stock/add">Add New Stock</Nav.Link>
                        <Nav.Link href="/admin" style={{ marginLeft: 50 }}>View All Stocks</Nav.Link>
                        <Nav.Link href="/admin/viewAll" style={{ marginLeft: 50 }}>View All Customers</Nav.Link>
                        {/* <Nav.Link href="/mjinvestments/portfolio" style={{ marginLeft: 80 }}>Portfolio</Nav.Link> */}
                        {/* <Nav.Link href="/mjinvestments/profile" style={{ marginLeft: 100 }}>Pricing</Nav.Link> */}
                    </Nav>

                    <Nav className="me-auto" style={{ marginLeft: 20 }}>
                    <button type="button" className="btn btn-primary" onClick={handleLogout}>Log Out</button>
                   
                    </Nav>

                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default AdminNavbar;