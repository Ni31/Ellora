import React, { useState } from 'react';

function Products() {
  const [category, setCategory] = useState('all');
  
  const products = [
    { id: 1, name: 'Organic Wheat', category: 'agriculture', price: '$350/ton', image: '/images/agriculture/wheat.jpg' },
    { id: 2, name: 'Solar Panels', category: 'energy', price: '$200/unit', image: '/images/energy/solar-panel.jpg' },
    { id: 3, name: 'Antibiotics', category: 'pharma', price: '$45/pack', image: '/images/pharma/antibiotics.jpg' },
    { id: 4, name: 'Fresh Fruits', category: 'agriculture', price: '$4/kg', image: '/images/agriculture/fruits.jpg' },
    { id: 5, name: 'Wind Turbines', category: 'energy', price: '$15000/unit', image: '/images/energy/wind-turbine.jpg' },
    { id: 6, name: 'Vaccines', category: 'pharma', price: '$120/vial', image: '/images/pharma/vaccines.jpg' }
  ];
  
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(product => product.category === category);
  
  return (
    <div className="container py-5">
      <h1 className="mb-4">Our Products</h1>
      
      <div className="mb-4">
        <div className="btn-group">
          <button 
            className={`btn ${category === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCategory('all')}
          >
            All Products
          </button>
          <button 
            className={`btn ${category === 'agriculture' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCategory('agriculture')}
          >
            Agricultural
          </button>
          <button 
            className={`btn ${category === 'energy' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCategory('energy')}
          >
            Renewable Energy
          </button>
          <button 
            className={`btn ${category === 'pharma' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCategory('pharma')}
          >
            Pharmaceutical
          </button>
        </div>
      </div>
      
      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} style={{height: "200px", objectFit: "cover"}} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
                <button className="btn btn-sm btn-primary">Request Quote</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;