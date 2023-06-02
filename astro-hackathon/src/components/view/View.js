import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import "./view.scss";
import { Link } from "react-router-dom";

const View = ({thisLongLat}) => {

// const lat = Number(thisLongLat.iss_position.latitude)
// const lon = Number(thisLongLat.iss_position.longitude)

const floatValueLat = parseFloat(thisLongLat.iss_position.latitude);
const floatValueLon = parseFloat(thisLongLat.iss_position.longitude);
console.log(floatValueLat);
console.log(floatValueLon);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = useMemo(() => ({ lat: {floatValueLat}, lng: {floatValueLon} }), []);


 if (!floatValueLat || !floatValueLon) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="MapContainer">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Link to="/location" className="main__link">
            Back
          </Link>

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

export default View;
