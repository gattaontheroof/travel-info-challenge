import React, { useState } from 'react';
import useLocalStorage from "../hooks/useLocalStorage";
import FavouriteLocationBox from "../components/FavouriteLocations/FavouriteLocationBox";
import RemoveFavouriteModal from '../components/FavouriteLocations/RemoveFavouriteModal';

function FavouriteLocations() {
  
  // state
  const [favouriteLocations, setFavouriteLocations] = useLocalStorage("favouriteLocations", []);
  const [showModal, setShowModal] = useState(false);
  const [locationToRemove, setLocationToRemove] = useState("");

  // event handlers
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const displayModal = (location) => {
    setLocationToRemove(location);
    handleShow();
  }

  const removeFavourite = () => {

    const updatedFavouriteLocations = favouriteLocations.filter((location) => {
      return location !== locationToRemove;
    });

    setFavouriteLocations(updatedFavouriteLocations);
    handleClose();
  };

  const renderedLocations = favouriteLocations.map((location) => {
    return <FavouriteLocationBox onRemove={displayModal}  location={location} key={location} />
  });

  return (

      <div>
        <div className="container text-center" id="fav-locations-container">
          
          <div className="row">
            <h2>My favourite locations</h2>
          </div>
          
          <div className="row">
            {renderedLocations}
          </div>

        </div>

        {showModal && <RemoveFavouriteModal location={locationToRemove} onCancel={handleClose} onConfirm={removeFavourite} />}
        {showModal && <div className="modal-backdrop fade show"></div>}

      </div>

   
  );
}

export default FavouriteLocations;