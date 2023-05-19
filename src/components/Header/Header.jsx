import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/vijigilogo.png'

const Header = () => {
    return (
        <Navbar expand="md" className="justify-content-between border-bottom">
            <Container>
                <Link to="/">
                    <img
                        src={Logo}
                        alt="Vijigi Logo"
                        className="img-fluid"
                        style={{ maxWidth: '60px', height: 'auto' }}
                    />
                </Link>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-md-center">
                    <Nav>
                        <Link to="/" exact className="nav-link px-3">Home</Link>
                        <Link to="/about" className="nav-link px-3">About Us</Link>
                        <Link to="/technology" className="nav-link px-3">Technology</Link>
                        <Link to="/career" className="nav-link px-3">Career</Link>

                    </Nav>
                </Navbar.Collapse>
                <Nav>
                        <Link to="/contact" className="btn" style={{ backgroundColor: '#FFCD5A' }}>
                            Contact Us
                        </Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
