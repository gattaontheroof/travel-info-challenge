import React from "react";
import { useNavigate } from "react-router-dom";

function FavouriteLocationBox({location, onRemove}) {

    const navigate = useNavigate();
    
    const handleClick = (e) => {
        navigate(`/PlaceDetails?location=${location}`);
    };

    const handleIconClick = (e) => {
        onRemove(location);
    };

    return (
        <div className="col-md-6 favourite-item">
            <h3>
                <img src="/assets/bookmark-check-fill.svg" alt="Bootstrap" width="32" height="32" onClick={handleIconClick}></img>
                <span onClick={handleClick}>{location}</span>
            </h3>
        </div>
    )

}

export default FavouriteLocationBox;