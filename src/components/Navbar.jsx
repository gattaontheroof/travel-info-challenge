import { Link } from "react-router-dom";
import LocationSearch from "./Homepage/LocationSearch";


const Navbar = function ({favourites}) {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
      <div className="container-fluid" id="navbar-container">
        <Link className="navbar-brand" to="/">
          <img src={`/assets/logo_transparent.png`} alt="Logo" id="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/FavouriteLocations">
                My Locations
              </Link>
            </li>
            
          </ul>
          <div className="d-flex ms-auto">
            <LocationSearch />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;