import PropTypes from "prop-types";
import logo from "@assets/icons/logo.svg";

const LogoIcon = ({ className }) => {
  return <img src={logo} alt="" className={`${className}`} />;
};

LogoIcon.propTypes = {
  className: PropTypes.string,
};

LogoIcon.defaultProps = {
  className: "",
};

export default LogoIcon;
