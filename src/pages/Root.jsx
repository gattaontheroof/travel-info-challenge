import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import useLocalStorage from "../hooks/useLocalStorage";

export default function Root() {

  const [favouriteLocations, setFavouriteLocations] = useLocalStorage("favouriteLocations", []);
  
  return (
    <div className="container mx-auto px-4">
      <Navbar favourites={favouriteLocations.length>0 ? true : false}/>
      <Outlet />
      <Footer />
    </div>
  );
}