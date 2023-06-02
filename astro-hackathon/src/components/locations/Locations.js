import "./Locations.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Locations = ({thisLongLat}) => {
  // const [thisLongLat, setThisLongLat] = useState({});

  // useEffect(() => {
  //   axios
  //     .get("http://api.open-notify.org/iss-now.json")
  //     .then((response) => {
  //       setThisLongLat(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const convertTime = (time) => {
    let date = new Date(time * 1000);
    return date;
  };

 
  if (!thisLongLat.iss_position) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="locations">
      <div className="locations__container locations__container--ISS">
        <h2 className="locations__title">Locations</h2>
        <div className="locations__info location__info--ISS">
          <article className="locations__card">
            <h3 className="locations__name">Lattitude</h3>
            <p>
              {`The current latitude of the ISS is
              ${thisLongLat.iss_position.latitude}`}
            </p>
            <h3 className="locations__name">Longitude</h3>
            <p>
              {`The current longitude of the ISS is
              ${thisLongLat.iss_position.longitude}`}
            </p>
            <h3 className="locations__name">Time</h3>
            <p>
              {`
              ${convertTime(thisLongLat.timestamp)}`}
            </p>
          </article>
            <Link to="/view">
              <button className="locations__btn">open the map</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Locations;
