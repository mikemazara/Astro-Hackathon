import headerLogo from "../../assets/space-info-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} />
    </div>
  );
};

export default Header;
