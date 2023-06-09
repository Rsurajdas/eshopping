import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav
      className="site-navigation text-right text-md-center"
      role="navigation"
    >
      <Container>
        <ul className="site-menu d-none d-md-block">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/">Catalogue</NavLink>
          </li>
          <li>
            <NavLink to="/">New Arrivals</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
