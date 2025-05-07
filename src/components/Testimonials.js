import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO, AgriGlobal Inc.",
      image: "/images/testimonials/person1.jpg",
      text: "GlobalTrade Solutions has been instrumental in expanding our agricultural exports to Asian markets. Their expertise in logistics and regulatory compliance saved us countless hours and resources."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Operations Director, SunPower Tech",
      image: "/images/testimonials/person2.jpg",
      text: "We've been importing solar panels through GlobalTrade for over 3 years now. Their attention to detail and commitment to timely delivery has made them our preferred partner."
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Supply Chain Manager, MediPharm",
      image: "/images/testimonials/person3.jpg",
      text: "The pharmaceutical industry demands precision and compliance. GlobalTrade Solutions understands these requirements and has consistently delivered on their promises."
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <div className="row">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="rounded-circle" 
                        width="60" 
                        height="60"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">{testimonial.name}</h5>
                      <p className="text-muted small">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="card-text fst-italic">"{testimonial.text}"</p>
                  <div className="text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;