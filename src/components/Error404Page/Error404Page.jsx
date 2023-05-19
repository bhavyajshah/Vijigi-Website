import React from 'react';
import { Outlet } from 'react-router-dom';
// import Error404Page from './Error404Page.css'

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-heading">404</h1>
            <p className="not-found-message">Oops! Page not found.</p>
            <p className="not-found-description">The page you are looking for does not exist.</p>
            <Outlet /> {/* Render nested routes within the 404 page */}
        </div>
    );
};

export default NotFoundPage;
