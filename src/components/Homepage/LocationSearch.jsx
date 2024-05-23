import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LocationSearch = () => {
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate(`/PlaceDetails?location=${location}`);
    };

    const handleChange = (e) => {
        setLocation(e.target.value);
    };

    return (
     
      <form className="d-flex flex-column align-items-center form-inline" role="search" onSubmit={handleSubmit}>
        

        <div className="input-group">
        
          <input 
            className="form-control me-1"  
            type="search" 
            placeholder="Location name..." 
            aria-label="Search"
            value={location}
            onChange={handleChange}
          />
          
          <button className="btn btn-success" type="submit">
            Search
          </button>

        </div>
        
      </form>
    );
};

export default LocationSearch;