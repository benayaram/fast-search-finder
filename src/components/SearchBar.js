import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ countries }) => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (input) => {
    setSearchInput(input);
    if (input.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filteredSuggestions = countries.filter(
      (country) =>
        country.country.toLowerCase().includes(input.toLowerCase()) ||
        country.capital.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (name) => {
    setSearchInput(name);
    setSuggestions([]);
    navigate(`/country/${name}`);
  };

  return (
    <div className="search-bar-container">
      <div className="search-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search for countries or capitals..."
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion.country)}
            >
              <span className="country-name">{suggestion.country}</span> -{" "}
              <span className="capital-name">{suggestion.capital}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
