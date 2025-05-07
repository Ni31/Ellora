import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="container py-5">
      <h1 className="mb-4">Contact Us</h1>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <img src="/images/contact-us.jpg" className="card-img-top" alt="Contact Us" style={{height: "250px", objectFit: "cover"}} />
            <div className="card-body">
              <h3>Get In Touch</h3>
              <p>Have questions about our import/export services? Contact us today and our team will be happy to assist you.</p>
              
              <div className="mb-3">
                <h5><i className="bi bi-geo-alt-fill text-primary me-2"></i>Office Address</h5>
                <p>123 Global Trade Center<br />Business District<br />New York, NY 10001</p>
              </div>
              
              <div className="mb-3">
                <h5><i className="bi bi-info-circle-fill text-primary me-2"></i>Contact Information</h5>
                <p>
                  <i className="bi bi-envelope me-2"></i>Email: info@globaltrade.com<br />
                  <i className="bi bi-telephone me-2"></i>Phone: +1 (555) 123-4567<br />
                  <i className="bi bi-printer me-2"></i>Fax: +1 (555) 123-4568
                </p>
              </div>
              
              <div className="mb-3">
                <h5><i className="bi bi-clock-fill text-primary me-2"></i>Business Hours</h5>
                <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="card mt-4 shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Our Location</h3>
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256349542!2d-73.98784492426285!3d40.75097623440643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1682458665975!5m2!1sen!2sus" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;