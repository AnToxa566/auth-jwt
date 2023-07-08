import PropTypes from "prop-types";
import logo from "../../assets/icons/logo.svg";

const Logo = ({ className }) => {
  return <img src={logo} alt="" className={`${className}`} />;
};

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: "",
};

export default Logo;
