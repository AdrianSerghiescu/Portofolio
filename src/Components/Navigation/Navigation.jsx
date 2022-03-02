import { NavButton } from "./NavButton/NavButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const Navigation = () => {
  return (
    <div className="header-navigation">
      <nav className="navigation-nav">
        <input type="checkbox" id="check" />
        <label for="check" className="nav-check">
          <i>
            <FontAwesomeIcon icon={faBars} size="1x" />
          </i>
        </label>
        <motion.ul
          className="navigation-ul"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.5 }}
        >
          <li>
            <NavButton label="Home" path="/home_page" />
          </li>
          <li>
            <NavButton label="About Me" path="/about_me" />
          </li>
          <li>
            <NavButton label="Projects" path="/projects" />
          </li>
          <li>
            <NavButton label="Experience" path="/experience" />
          </li>
          <li>
            <NavButton label="Contact Me" path="/contact_me" />
          </li>
        </motion.ul>
      </nav>
    </div>
  );
};
