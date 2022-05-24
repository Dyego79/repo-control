import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="header__nav">
        <NavLink to="/productos/smartphones" className="header__nav__link">
          SMARTPHONE
        </NavLink>
        <NavLink to="/productos/tablets" className="header__nav__link">
          TABLETS
        </NavLink>
        <NavLink to="/productos/smart-tv" className="header__nav__link">
          SMART-TVS
        </NavLink>
      </nav>
      <CartWidget />
    </>
  );
};
export default NavBar;
