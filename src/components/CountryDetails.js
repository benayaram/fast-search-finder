import React from "react";
import { useParams } from "react-router-dom";
import "./CountryDetails.css";

const CountryDetails = ({ countries }) => {
  const { name } = useParams();
  const country = countries.find((c) => c.country === name);

  return (
    <div className="country-details">
      {country ? (
        <div className="details-card">
          <h2>{country.country}</h2>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Official Language:</strong> {country.official_language}</p>
          <p><strong>Currency:</strong> {country.currency}</p>
        </div>
      ) : (
        <p>Country not found.</p>
      )}
    </div>
  );
};

export default CountryDetails;
