import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const servicesData = [
    'Plumbing',
    'Electrical',
    'Carpentry',
    'BeautySalon',
    'Gardening',
    'Cleaning',
    'Packers',
    'Repairs',
    'Sanitization',
  ];

  const [selectedService, setSelectedService] = useState('');
  const navigate = useNavigate();

  const handleServiceChange = (event) => {
    const selected = event.target.value;
    setSelectedService(selected);
    if (selected) {
      navigate(`/services/${selected.toLowerCase()}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">HomeFix</a>
        <form className="d-flex ms-3" onSubmit={(e) => e.preventDefault()}>
          <select
            className="form-control navbar-search me-2"
            value={selectedService}
            onChange={handleServiceChange}
          >
            <option value="">Search services</option>
            {servicesData.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>

          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                <i className="bi bi-person-circle"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
