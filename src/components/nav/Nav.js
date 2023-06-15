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
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shop"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="catalogue"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Catalogue
            </NavLink>
          </li>
          <li>
            <NavLink
              to="new-arrival"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              New Arrivals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Nav;
