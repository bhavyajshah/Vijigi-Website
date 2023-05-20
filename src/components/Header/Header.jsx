import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/vijigilogo.png';
import NavLinks from '../../api/NavLinks';
const Header = ()=>{
    return (
        <Navbar expand="md" className="justify-content-between border-bottom">
            <Container className="d-flex align-items-center">
                <Link to="/">
                    <img
                        src={Logo}
                        alt="Vijigi Logo"
                        className="img-fluid"
                        style={{ maxWidth: '60px', height: 'auto' }}
                    />
                </Link>
                <Navbar.Toggle aria-controls="navbar-nav" className="ml-auto" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        {NavLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                exact={link.to === '/'}
                                className="nav-link px-3"
                            >
                                {link.text}
                            </Link>
                        ))}
                    </Nav>
                    <Link
                        to="/contact"
                        className="btn"
                        style={{ backgroundColor: '#FFCD5A' }}
                    >
                        Contact Us
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
                        };

export default Header;
