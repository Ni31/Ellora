import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedProduct() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2 mb-4 mb-md-0">
            <img 
              src="/images/featured-product.jpg" 
              alt="Featured Product" 
              className="img-fluid rounded shadow"
              style={{ objectFit: "cover", height: "400px", width: "100%" }}
            />
          </div>
          <div className="col-md-6 order-md-1">
            <div className="badge bg-warning text-dark mb-2">Featured Product</div>
            <h2 className="fw-bold">Premium Organic Wheat</h2>
            <p className="lead">Sustainably grown and harvested to meet the highest quality standards.</p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> 100% Organic Certified</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Non-GMO</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> High Protein Content</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Sustainably Farmed</li>
            </ul>
            <div className="d-flex gap-2">
              <Link to="/products" className="btn btn-primary">View Details</Link>
              <button className="btn btn-outline-primary">Request Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;