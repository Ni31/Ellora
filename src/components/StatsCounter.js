import React from 'react';

function StatsCounter() {
  return (
    <section className="py-5 bg-primary text-white">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="display-4 fw-bold">50+</div>
            <p className="mb-0">Countries Served</p>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="display-4 fw-bold">1000+</div>
            <p className="mb-0">Successful Shipments</p>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <div className="display-4 fw-bold">200+</div>
            <p className="mb-0">Business Partners</p>
          </div>
          <div className="col-md-3">
            <div className="display-4 fw-bold">15+</div>
            <p className="mb-0">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsCounter;