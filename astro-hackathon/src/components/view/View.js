import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import "./view.scss";
import { Link } from "react-router-dom";

const View = ({thisLongLat}) => {

// const lat = Number(thisLongLat.iss_position.latitude)
// const lon = Number(thisLongLat.iss_position.longitude)

const floatValueLat = (thisLongLat.iss_position.latitude) * 1;
const floatValueLon = (thisLongLat.iss_position.longitude) * 1;
console.log(floatValueLat);
console.log(floatValueLon);
console.log(typeof floatValueLat)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = useMemo(() => ({ lat: floatValueLat, lng: floatValueLat }), [floatValueLat, floatValueLon]);


 if (!floatValueLat || !floatValueLon) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="MapContainer">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <div className="map__container-container">
          <Link to="/location" className="main__link">
            Back
          </Link>

          <GoogleMap
            mapContainerClassName="map-container"
            center={ center }
            zoom={11}
          />
        </div>
      )}
    </div>
  );
};

export default View;
