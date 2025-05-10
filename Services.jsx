import React, { useState } from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Plumbing',
    image: '/PLUMBING LOGO.png', // public folder path
    shortDescription: 'Expert plumbing services.',
    fullDescription: 'We provide expert plumbing solutions for homes and businesses.',
  },
  {
    id: 2,
    title: 'Electrical',
    image: '/ELECTRICAL LOGO.png',
    shortDescription: 'Certified electrical work.',
    fullDescription: 'Certified electricians for wiring, lighting, and more.',
  },
  {
    id: 3,
    title: 'Cleaning',
    image: '/CLEANING LOGO PRO.png',
    shortDescription: 'Custom cleaning solutions.',
    fullDescription: 'Professional cleaning for all needs.',
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (id) => {
    setActiveService(id === activeService ? null : id); // toggle
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h2>Our Services</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {servicesData.map((service) => (
          <li
            key={service.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <h3
              style={{
                color: 'blue',
                cursor: 'pointer',
                textDecoration: 'underline',
                marginTop: '1rem',
              }}
              onClick={() => handleServiceClick(service.id)}
            >
              {service.title}
            </h3>
            <p>{service.shortDescription}</p>
            {activeService === service.id && (
              <p style={{ marginTop: '0.5rem' }}>{service.fullDescription}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
