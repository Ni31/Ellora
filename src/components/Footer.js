import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>GlobalTrade Solutions</h5>
            <p>Your trusted partner for international trade in agricultural products, renewable energy solutions, and pharmaceutical supplies.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none"><i className="bi bi-chevron-right me-1"></i>Home</Link></li>
              <li><Link to="/products" className="text-white text-decoration-none"><i className="bi bi-chevron-right me-1"></i>Products</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none"><i className="bi bi-chevron-right me-1"></i>Services</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none"><i className="bi bi-chevron-right me-1"></i>Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
            </div>
            <div className="mt-3">
              <p><i className="bi bi-envelope-fill me-2"></i>info@globaltrade.com</p>
              <p><i className="bi bi-telephone-fill me-2"></i>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} GlobalTrade Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;