import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import StatsCounter from '../components/StatsCounter';
import Testimonials from '../components/Testimonials';

function Home() {
  // Add animation classes when elements come into view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated');
          
          if (entry.target.classList.contains('animate-fade-up')) {
            entry.target.classList.add('animate__fadeInUp');
          } else if (entry.target.classList.contains('animate-fade-right')) {
            entry.target.classList.add('animate__fadeInRight');
          } else if (entry.target.classList.contains('animate-fade-left')) {
            entry.target.classList.add('animate__fadeInLeft');
          }
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-right, .animate-fade-left');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-3 hero-title">Global Import & Export Solutions</h1>
              <p className="lead fs-4 mb-4 hero-text">Specializing in agricultural products, renewable energy solutions, and pharmaceutical supplies.</p>
              <div className="d-flex gap-3 hero-buttons">
                <Link to="/products" className="btn btn-light btn-lg fw-bold px-4">Explore Products</Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-4">Contact Us</Link>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <img src="/images/global-trade-banner.jpg" alt="Global Trade" className="img-fluid rounded-3 shadow-lg hero-image" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Counter */}
      <div className="stats-section">
        <StatsCounter />
      </div>
      
      {/* Featured Products with Video Animation */}
      <div className="py-5">
        <div className="container py-4">
          <h2 className="text-center display-5 fw-bold mb-2 animate-fade-up">Our Premium Products</h2>
          <p className="text-center text-muted mb-5 animate-fade-up">Delivering quality across continents</p>
          
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-6 animate-fade-right">
              <div className="video-container position-relative rounded-4 overflow-hidden shadow-lg">
                <video className="w-100" autoPlay loop muted playsInline>
                  <source src="/videos/agriculture-products.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-20"></div>
                <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-dark bg-opacity-50">
                  <h3 className="text-white">Agricultural Products</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 animate-fade-left">
              <h3 className="fw-bold mb-4">Premium Agricultural Exports</h3>
              <p className="lead mb-4">We source and deliver the highest quality agricultural products from sustainable farms worldwide.</p>
              
              <div className="d-flex align-items-center mb-3 feature-item">
                <div className="bg-success rounded-circle p-2 me-3">
                  <i className="bi bi-check-lg text-white"></i>
                </div>
                <p className="mb-0">Organic certified grains and cereals</p>
              </div>
              <div className="d-flex align-items-center mb-3 feature-item">
                <div className="bg-success rounded-circle p-2 me-3">
                  <i className="bi bi-check-lg text-white"></i>
                </div>
                <p className="mb-0">Fresh fruits and vegetables with extended shelf life</p>
              </div>
              <div className="d-flex align-items-center mb-3 feature-item">
                <div className="bg-success rounded-circle p-2 me-3">
                  <i className="bi bi-check-lg text-white"></i>
                </div>
                <p className="mb-0">Processed food products meeting international standards</p>
              </div>
              
              <Link to="/products" className="btn btn-primary mt-3 btn-animated">Explore Agricultural Products</Link>
            </div>
          </div>
          
          <div className="row g-5 align-items-center mb-5 flex-lg-row-reverse">
            <div className="col-lg-6 animate-fade-left">
              <div className="video-container position-relative rounded-4 overflow-hidden shadow-lg">
                <video className="w-100" autoPlay loop muted playsInline>
                  <source src="/videos/renewable-energy.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-20"></div>
                <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-dark bg-opacity-50">
                  <h3 className="text-white">Renewable Energy Solutions</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 animate-fade-right">
              <h3 className="fw-bold mb-4">Sustainable Energy Products</h3>
              <p className="lead mb-4">Our renewable energy solutions help businesses reduce their carbon footprint while saving on energy costs.</p>
              
              <div className="d-flex align-items-center mb-3 feature-item">
                <div className="bg-success rounded-circle p-2 me-3">
                  <i className="bi bi-check-lg text-white"></i>
                </div>
                <p className="mb-0">High-efficiency solar panels with extended warranties</p>
              </div>
              <div className="d-flex align-items-center mb-3 feature-item">
                <div className="bg-success rounded-circle p-2 me-3">
                  <i className="bi bi-check-lg text-white"></i>
                </div>
                <p className="mb-0">Wind turbine components and complete systems</p>
              </div>
              <div className="d-flex align-items-center mb-3 feature-item">
                <div className="bg-success rounded-circle p-2 me-3">
                  <i className="bi bi-check-lg text-white"></i>
                </div>
                <p className="mb-0">Energy storage solutions and smart grid technology</p>
              </div>
              
              <Link to="/products" className="btn btn-primary mt-3 btn-animated">Explore Energy Solutions</Link>
            </div>
          </div>
          
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 animate-fade-right">
              <div className="video-container position-relative rounded-4 overflow-hidden shadow-lg">
                <video className="w-100" autoPlay loop muted playsInline>
                  <source src="/videos/pharmaceutical.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-20"></div>
                <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-dark bg-opacity-50">
                  <h3 className="text-white">Pharmaceutical Products</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 animate-fade-left">
              <h3 className="fw-bold mb-4">Medical & Pharmaceutical Supplies</h3>
              <p className="lead mb-4">We deliver pharmaceutical products and medical supplies that meet the highest quality and regulatory standards.</p>
              
              <div className="d-flex align-items-center mb-3 feature-item">
                <div className="bg-success rounded-circle p-2 me-3">
                  <i className="bi bi-check-lg text-white"></i>
                </div>
                <p className="mb-0">FDA and EMA approved medications</p>
              </div>
              <div className="d-flex align-items-center mb-3 feature-item">
                <div className="bg-success rounded-circle p-2 me-3">
                  <i className="bi bi-check-lg text-white"></i>
                </div>
                <p className="mb-0">Medical equipment with certification and training</p>
              </div>
              <div className="d-flex align-items-center mb-3 feature-item">
                <div className="bg-success rounded-circle p-2 me-3">
                  <i className="bi bi-check-lg text-white"></i>
                </div>
                <p className="mb-0">Temperature-controlled supply chain for sensitive products</p>
              </div>
              
              <Link to="/products" className="btn btn-primary mt-3 btn-animated">Explore Pharmaceutical Products</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Us Section */}
      <div className="py-5 bg-light">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="/images/about-us.jpg" alt="About Our Company" className="img-fluid rounded-3 shadow" />
            </div>
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold mb-4">Your Trusted Global Trade Partner</h2>
              <p className="lead mb-4">With over 15 years of experience in international trade, we connect businesses worldwide with high-quality products and reliable logistics solutions.</p>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-3 me-3">
                      <i className="bi bi-globe2 fs-4"></i>
                    </div>
                    <div>
                      <h5>Global Network</h5>
                      <p className="mb-0">Connections in over 50 countries across 6 continents</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle p-3 me-3">
                      <i className="bi bi-shield-check fs-4"></i>
                    </div>
                    <div>
                      <h5>Quality Assured</h5>
                      <p className="mb-0">Rigorous quality control and compliance standards</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/services" className="btn btn-primary px-4">Our Services</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sectors Section */}
      <div className="py-5">
        <div className="container py-4">
          <h2 className="text-center display-5 fw-bold mb-5">Our Sectors</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-card">
                <div className="card-img-overlay-wrapper position-relative">
                  <img src="/images/agriculture/agriculture-banner.jpg" className="card-img-top" alt="Agriculture" style={{height: "220px", objectFit: "cover"}} />
                  <div className="card-img-overlay bg-gradient-dark d-flex align-items-end">
                    <h3 className="text-white mb-0 p-3">Agricultural Products</h3>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">High-quality grains, fruits, vegetables, and processed food products from sustainable sources worldwide.</p>
                  <Link to="/products" className="btn btn-sm btn-outline-primary">View Products</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-card">
                <div className="card-img-overlay-wrapper position-relative">
                  <img src="/images/energy/renewable-banner.jpg" className="card-img-top" alt="Renewable Energy" style={{height: "220px", objectFit: "cover"}} />
                  <div className="card-img-overlay bg-gradient-dark d-flex align-items-end">
                    <h3 className="text-white mb-0 p-3">Renewable Energy</h3>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">Solar panels, wind turbines, and sustainable energy solutions for a greener future.</p>
                  <Link to="/products" className="btn btn-sm btn-outline-primary">View Products</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-card">
                <div className="card-img-overlay-wrapper position-relative">
                  <img src="/images/pharma/pharma-banner.jpg" className="card-img-top" alt="Pharmaceuticals" style={{height: "220px", objectFit: "cover"}} />
                  <div className="card-img-overlay bg-gradient-dark d-flex align-items-end">
                    <h3 className="text-white mb-0 p-3">Pharmaceutical Products</h3>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">Medical supplies, medications, and healthcare equipment meeting international standards.</p>
                  <Link to="/products" className="btn btn-sm btn-outline-primary">View Products</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Process Section */}
      <div className="py-5 bg-light">
        <div className="container py-4">
          <h2 className="text-center display-5 fw-bold mb-5">How We Work</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{width: "80px", height: "80px"}}>
                  <i className="bi bi-chat-dots-fill fs-2"></i>
                </div>
                <h4>Consultation</h4>
                <p>We discuss your needs and identify the best products and services for your business.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{width: "80px", height: "80px"}}>
                  <i className="bi bi-search fs-2"></i>
                </div>
                <h4>Sourcing</h4>
                <p>We locate the highest quality products from our global network of trusted suppliers.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{width: "80px", height: "80px"}}>
                  <i className="bi bi-truck fs-2"></i>
                </div>
                <h4>Logistics</h4>
                <p>We handle shipping, customs clearance, and all documentation for smooth delivery.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle mx-auto mb-4 d-flex align-items-center justify-content-center" style={{width: "80px", height: "80px"}}>
                  <i className="bi bi-check-circle-fill fs-2"></i>
                </div>
                <h4>Delivery</h4>
                <p>Your products arrive on time, meeting all quality and regulatory standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Latest News Section */}
      <div className="py-5">
        <div className="container py-4">
          <h2 className="text-center display-5 fw-bold mb-5">Latest News</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-card">
                <img src="/images/news/news1.jpg" className="card-img-top" alt="News" style={{height: "200px", objectFit: "cover"}} />
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="badge bg-primary">Agriculture</span>
                    <small className="text-muted">June 15, 2023</small>
                  </div>
                  <h5 className="card-title">New Organic Certification Standards for Exports</h5>
                  <p className="card-text">Our agricultural products now meet the latest international organic certification standards...</p>
                  <a href="#" className="btn btn-sm btn-outline-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-card">
                <img src="/images/news/news2.jpg" className="card-img-top" alt="News" style={{height: "200px", objectFit: "cover"}} />
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="badge bg-primary">Energy</span>
                    <small className="text-muted">May 28, 2023</small>
                  </div>
                  <h5 className="card-title">Expanding Renewable Energy Solutions to Asia</h5>
                  <p className="card-text">GlobalTrade Solutions is proud to announce our expansion into Asian markets with our renewable energy products...</p>
                  <a href="#" className="btn btn-sm btn-outline-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 hover-card">
                <img src="/images/news/news3.jpg" className="card-img-top" alt="News" style={{height: "200px", objectFit: "cover"}} />
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="badge bg-primary">Pharmaceutical</span>
                    <small className="text-muted">April 10, 2023</small>
                  </div>
                  <h5 className="card-title">New Partnership with Leading Pharmaceutical Manufacturer</h5>
                  <p className="card-text">We've established a strategic partnership with a leading pharmaceutical manufacturer to enhance our product offerings...</p>
                  <a href="#" className="btn btn-sm btn-outline-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action with animation */}
      <div className="cta-section">
        <div className="cta-content">
          <CallToAction />
        </div>
      </div>
    </div>
  );
}

export default Home;
