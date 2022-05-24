import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <NavLink to="/">
          <span className="header__logo">EGO TECH</span>
        </NavLink>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
