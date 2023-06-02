import "./Locations.scss"
const Locations = () => {
  return (
    <div className="locations">
      <div className="locations__container locations__container--ISS">
        <h2>Locations</h2>
        <div className="location__info location__info--ISS">
          <article className="location__card">
            <h3 className="location__name">Location Name</h3>
            <h3 className="location__name">Location Name</h3>
            <h3 className="location__name">Location Name</h3>
          </article>
        </div>
      </div>
      <div className="locations__container locations__container--earth">
        <h2>Locations</h2>
        <div className="location__info location__info--earth">
          <article className="location__card">
            <h3 className="location__name">Location Name</h3>
            <h3 className="location__name">Location Name</h3>
            <h3 className="location__name">Location Name</h3>
            <button>open the map</button>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Locations;
