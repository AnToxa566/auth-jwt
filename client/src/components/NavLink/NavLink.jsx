import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({ to, title }) => {
  return (
    <Link className="cursor-pointer" to={to}>
      {title}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavLink;
