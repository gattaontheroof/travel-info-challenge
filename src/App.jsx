import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { placeDetailsLoader } from "./pages/placeDetailsLoader";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css"; 

import Root from "./pages/Root";
import Home from "./pages/Home";
import FavouriteLocations from "./pages/FavouriteLocations";
import PlaceDetails from "./pages/PlaceDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/FavouriteLocations",
        element: <FavouriteLocations />,
      },
      {
        path: "/PlaceDetails",
        element: <PlaceDetails />,
        loader: placeDetailsLoader,
      },
    ],
  },
]);

function App(){
  return <RouterProvider router={router} />;
};

export default App;