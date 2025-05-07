import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="py-5 bg-gradient" style={{ background: 'linear-gradient(90deg, #0d6efd, #0dcaf0)' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 text-white">
            <h2 className="fw-bold">Ready to expand your global reach?</h2>
            <p className="lead mb-0">Partner with us for seamless import and export solutions tailored to your business needs.</p>
          </div>
          <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
            <Link to="/contact" className="btn btn-light btn-lg px-4 fw-bold">Contact Us Today</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;