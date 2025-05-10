import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const serviceData = {
  plumbing: {
    title: 'Plumbing',
    description: 'Expert plumbing solutions for homes and businesses.',
    reviews: [
      { name: 'John Doe', rating: 5, comment: 'Excellent service!' },
      { name: 'Jane Smith', rating: 4, comment: 'Quick and reliable.' },
    ],
  },
  electrical: {
    title: 'Electrical',
    pid:'1',
    pcost:'100',
    pdescription: 'Certified electricians for wiring and lighting.',
    reviews: [
      { name: 'Mike Johnson', rating: 4, comment: 'Professional and safe.' },
    ],
  },
  cleaning: {
    title: 'Cleaning',
    description: 'Top-quality home and office cleaning.',
    reviews: [
      { name: 'Anna Lee', rating: 5, comment: 'Sparkling clean results!' },
    ],
  },
  carpentry: {
    title: 'Carpentry',
    description: 'Expert carpentry solutions for homes and furnitures.',
    reviews: [
      { name: 'John Doe', rating: 5, comment: 'Excellent service!' },
      { name: 'Jane Smith', rating: 4, comment: 'Quick and reliable.' },
    ],
  },
  gardening: {
    title: 'Gardening',
    description: 'Certified gardening experts for farms.',
    reviews: [
      { name: 'Mike Johnson', rating: 4, comment: 'Professional and quick.' },
    ],
  },
  beautysalon: {
    title: 'Beauty salon',
    description: 'Friendly and professional beauty service.',
    reviews: [
      { name: 'Anna Lee', rating: 5, comment: 'Beautiful and fair results!' },
    ],
  },
  packers: {
    title: 'Packers and movers',
    description: 'Expert packing solutions for homes and furnitures.',
    reviews: [
      { name: 'John Doe', rating: 5, comment: 'Excellent service!' },
      { name: 'Jane Smith', rating: 4, comment: 'Quick and reliable.' },
    ],
  },
  sanitization: {
    title: 'Sanitization',
    description: 'Safe and clean service',
    reviews: [
      { name: 'Anna Lee', rating: 5, comment: 'Beautiful and fair results!' },
    ],
  },
  
  
  repairs: {
    title: 'Appliance repairs',
    description: 'Certified experts for repairs',
    reviews: [
      { name: 'Mike Johnson', rating: 4, comment: 'Professional and quick.' },
    ],
  },
  
};

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  const service = serviceData[serviceName];

  if (!service) return <p>Service not found.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <h4>Reviews:</h4>
      <ul>
        {service.reviews.map((r, index) => (
          <li key={index}>
            <strong>{r.name}</strong> - {r.rating}/5<br />
            {r.comment}
          </li>
        ))}
      </ul>
      <button
        style={{ marginTop: '1rem' }}
        onClick={() => navigate('/payment/${serviceName}')}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default ServiceDetail;