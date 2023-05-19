import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const socialMediaLinks = [
    {
        icon: 'fab fa-instagram',
        url: 'https://www.instagram.com/vijigienergy',
    },
    {
        icon: 'fab fa-linkedin-in',
        url: 'https://www.linkedin.com/in/meetkalola',
    },
];

const footerLinks = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Technology', url: '/technology' },
    { text: 'Career', url: '/career' },
    { text: 'Contact', url: '/contact' },
];

const SocialMediaIcon = ({ icon, url }) => (
    <Link to={url} className="social-media-icon" target="_blank" rel="noopener noreferrer">
        <i className={icon}></i>
    </Link>
);

const Footer = () => (
    <footer className="footer text-light text-center text-lg-start py-4" style={{ background: '#212529'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img
                        src="https://static.wixstatic.com/media/347d58_2fb9ec4d0956414abb95061722eeaa91~mv2.png"
                        alt="Vijigi Logo"
                        className="img-fluid footer-logo"
                        style={{ maxWidth: '100%', height: '80px' }}
                    />
                    <div className="mt-3">
                        <p className="text footer-text">
                            Vijigi is a leading provider of innovative solutions for electric vehicles. We specialize in developing cutting-edge electric vehicle control units that optimize performance, efficiency, and reliability. Trust Vijigi for your electric vehicle control needs.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase text-light">Links</h5>
                    <ul className="list-unstyled mt-3">
                        {footerLinks.map((link, index) => (
                            <li className="mb-2" key={index}>
                                <Link to={link.url} className="text-decoration-none footer-link text-light">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase text-light">Social Media</h5>
                    <div className="social-media-icons mt-3">
                        {socialMediaLinks.map((link, index) => (
                            <SocialMediaIcon key={index} icon={link.icon} url={link.url} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center p-3 footer-bottom bg-dark">
            © {new Date().getFullYear()} Vijigi. All rights reserved.
        </div>
    </footer>
);

export default Footer;
