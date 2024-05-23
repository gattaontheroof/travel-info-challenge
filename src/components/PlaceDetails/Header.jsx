const Header = ({favouriteLocations, location, onBookmark}) => {

  const handleClick = (e) => {
    onBookmark(location);
  };

  const renderBookmarkHeader = () => {

    if(!favouriteLocations.includes(location)) {
      return ( 
        <h5 onClick={handleClick}>
          <img src="/assets/bookmark-check.svg" alt="Bootstrap" width="32" height="32"></img>
          Click to add to favourites
        </h5>
      );
    }

    return ( 
      <h5>
        <img src="/assets/bookmark-check-fill.svg" alt="Bootstrap" width="32" height="32"></img>
        Favourite Location
      </h5>
    );

  };

  return (
    <div className="container text-center" id="header-container">
            <h3>Telling you about...</h3>
            <h1>{location}</h1>
            {renderBookmarkHeader()}
    </div>
  );
};

export default Header;