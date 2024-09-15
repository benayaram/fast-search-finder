import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import CountryDetails from "./components/CountryDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";  // Ensure App.css is linked
import LOGO from "./logo.png"
const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch country data from the local data.json file in public folder
    axios
      .get("/data.json")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the country data:", error);
      });
  }, []);

  return (
    <Router>
       <div className="top-right-image-container">
          <img
            src={LOGO} // Replace with your image path
            alt="Top right corner"
            className="top-right-image"
          />
        </div>

      <div className="app-container">
        <header className="header">
          <h3>Fast Finder Search Bar</h3>
        </header>

        {/* Image in the top-right corner */}
       
        <SearchBar countries={countries} />
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ padding: "20px" }}>
                Start typing to search for a country...
              </div>
            }
          />
          <Route
            path="/country/:name"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
