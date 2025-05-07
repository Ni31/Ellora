import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/images/logo.png" alt="GlobalTrade Logo" height="40" className="me-2" />
          <span>GlobalTrade Solutions</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/"><i className="bi bi-house-door me-1"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products"><i className="bi bi-box me-1"></i>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services"><i className="bi bi-gear me-1"></i>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact"><i className="bi bi-envelope me-1"></i>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;