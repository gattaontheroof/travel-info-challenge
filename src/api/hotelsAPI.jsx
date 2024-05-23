import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import hotelsData from '../../data/dummyHotelData.json';

const searchHotelsData = async (location) => {

    // temporarily return json from file instead of API call
    return hotelsData.data;

    try {
        const options = {
          method: 'GET',
          url: 'https://priceline-com.p.rapidapi.com/cars/location/search',
          params: {q: location},
          headers: {
            'X-RapidAPI-Key': '03eb155580msh4f08f59c9496f3ep1918a0jsn42e706cf11c3',
            'X-RapidAPI-Host': 'priceline-com.p.rapidapi.com'
          }
        };
      
          const response = await axios.request(options);
          return response.data;
          console.log(response.data);
        } catch (error) {
          console.error(error);
          return null;
        }

        console.log()

      };

export default searchHotelsData;
