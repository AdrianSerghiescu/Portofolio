import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <i>
        <FontAwesomeIcon
          icon={faCopyright}
          size="1x"
          style={{ color: "#f7ce3e" }}
        />
        Copyright. Adrian Serghiescu
      </i>
    </div>
  );
};
