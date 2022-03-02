import { NavLink } from "react-router-dom";
import "./styles.css";

export const NavButton = (props) => {
  return (
    <NavLink
      className="nav-button"
      activeClassName="nav-button--active"
      to={props.path}
    >
      {props.label}
    </NavLink>
  );
};
