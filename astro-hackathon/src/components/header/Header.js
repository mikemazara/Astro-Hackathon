
import headerLogo from "../../assets/space-info-logo.png";
import { NavLink } from "react-router-dom";
import "./Header.scss"


const Header = () => {
  return (
    <div className="header">
      <NavLink to={"/"}><img className="header__logo" src={headerLogo} /></NavLink>
    </div>
  );
};

export default Header;
