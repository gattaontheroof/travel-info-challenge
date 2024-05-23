import React, { useEffect, useRef, useState } from 'react';

import tt from '@tomtom-international/web-sdk-maps';
import "@tomtom-international/web-sdk-maps/dist/maps.css";


export const Map = ({[long, lat]: center}) => {
const mapElement = useRef();

    const mapLongitude = -121.91599;
    const mapLatitude = 37.36765;
    const mapZoom = 10;
    const [map, setMap] = useState({});

    useEffect(() => {
        let map = tt.map({
            // key: "2bc247a9-3100-464c-854e-9dd5f6aa061e",
            container: mapElement.current,
            center: [mapLongitude, mapLatitude],
            zoom: mapZoom,
        });
        setMap(map);
        return () => map.remove();
    }, []);

    return (
        <>
            <div
                ref={mapElement}
                className="mapDiv"
                style={{ height: "500px" }} /* This height value can be set to whatever you need} */
            />
        </>
    );
}
