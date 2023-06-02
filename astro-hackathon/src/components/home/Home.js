import { Link } from "react-router-dom";
import "./Home.scss"

const Home = () => {
  return (
    <div className="main">
      <div className="main__container">
      <h1 className="main__header">Where is ISS right now?
Maybe it is above you in this exact moment?!</h1>
      <Link to="/location" className="main__link">
        Location
      </Link>
      </div>
    </div>
  );
};

export default Home;
