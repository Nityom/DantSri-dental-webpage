import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './NotFound.scss'; // Add styles

const NotFound = () => (
  <div className="not-found-container">
    <Helmet>
      <title>404 - Page Not Found | Dental Clinic</title>
      <meta name="description" content="Oops! The page you are looking for does not exist. Return to our homepage for quality dental care." />
    </Helmet>

    <div className="not-found-content">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>We can't seem to find the page you're looking for.</p>
      <Link to="/" className="home-link">🏠 Back to Home</Link>
    </div>
  </div>
);

export default NotFound;
