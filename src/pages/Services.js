import React from 'react';

function Services() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Our Services</h1>
      
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <img src="/images/import-services.jpg" className="card-img-top" alt="Import Services" style={{height: "250px", objectFit: "cover"}} />
            <div className="card-body">
              <h3>Import Services</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Market research and product sourcing</li>
                <li className="list-group-item">Quality control and inspection</li>
                <li className="list-group-item">Customs clearance assistance</li>
                <li className="list-group-item">Logistics and shipping coordination</li>
                <li className="list-group-item">Regulatory compliance management</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <img src="/images/export-services.jpg" className="card-img-top" alt="Export Services" style={{height: "250px", objectFit: "cover"}} />
            <div className="card-body">
              <h3>Export Services</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">International market entry strategies</li>
                <li className="list-group-item">Export documentation preparation</li>
                <li className="list-group-item">Trade finance solutions</li>
                <li className="list-group-item">Distribution network development</li>
                <li className="list-group-item">International trade compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="mb-4">Industry-Specific Solutions</h3>
      <div className="accordion shadow-sm" id="servicesAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              Agricultural Products
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#servicesAccordion">
            <div className="accordion-body">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img src="/images/agriculture/agriculture-service.jpg" alt="Agricultural Services" className="img-fluid rounded" />
                </div>
                <div className="col-md-8">
                  <p>We specialize in the import and export of a wide range of agricultural products, including grains, fruits, vegetables, and processed foods. Our services include quality assurance, cold chain logistics, and compliance with international food safety standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              Renewable Energy Solutions
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#servicesAccordion">
            <div className="accordion-body">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img src="/images/energy/energy-service.jpg" alt="Energy Services" className="img-fluid rounded" />
                </div>
                <div className="col-md-8">
                  <p>Our renewable energy division handles the import and export of solar panels, wind turbines, and other sustainable energy equipment. We provide technical consultation, project planning, and logistics for renewable energy installations worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              Pharmaceutical Products
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#servicesAccordion">
            <div className="accordion-body">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <img src="/images/pharma/pharma-service.jpg" alt="Pharmaceutical Services" className="img-fluid rounded" />
                </div>
                <div className="col-md-8">
                  <p>We facilitate the global trade of pharmaceutical products, including medications, medical supplies, and healthcare equipment. Our services ensure compliance with international regulations, proper handling of temperature-sensitive products, and secure supply chain management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;