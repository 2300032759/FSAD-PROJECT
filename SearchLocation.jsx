import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search({ setSelectedService }) {
  const [service, setService] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!service) {
      alert("Please select a service");
      return;
    }
    setSelectedService(service);
    navigate("/review");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "60vh", // Full viewport height
        flexDirection: "column",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <h2 className="mb-4">Find and book reliable home services in your area</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <select
          className="form-select"
          style={{
            width: "300px",
            height: "40px",
            padding: "0 10px",
          }}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Search location</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Vijayawada">Vijayawada</option>
          <option value="Kadapa">Kadapa</option>
          <option value="Guntur">Guntur</option>
          <option value="Karamchedu">Karamchedu</option>
          <option value="Tadepalli">Tadepall</option>
          
        </select>

        <button
          className="btn btn-outline-success"
          style={{
            height: "40px",
            padding: "0 15px",
          }}
          onClick={handleSearch}
        >
          Search Location
        </button>
      </div>
    </div>
  );
}
