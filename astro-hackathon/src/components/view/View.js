import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import "./view.scss";

const MapContainer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  
  const center = useMemo(() => ({ lat: 37.7749, lng: -122.4194 }), []);

  return (
    <div className="MapContainer">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={11}
          />
        </div>
      )}
    </div>
  );
};

export default MapContainer;