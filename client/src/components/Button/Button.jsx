import PropTypes from "prop-types";

const Button = ({ type, clickHandler, title, outline, small, className }) => {
  const baseStyle = "border-2 border-blue-700 bg-blue-700 text-white";
  const outlineStyle = "border-2 border-blue-700 bg-transparent text-blue-700";

  const baseSize = "px-8 py-3";
  const smallSize = "px-4 py-1";

  const btnStyle = outline ? outlineStyle : baseStyle;
  const btnSize = small ? smallSize : baseSize;

  return (
    <button
      type={type}
      onClick={clickHandler}
      className={`rounded font-medium ${btnStyle} ${btnSize} ${className}`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  clickHandler: PropTypes.func,
  title: PropTypes.string.isRequired,

  outline: PropTypes.bool,
  small: PropTypes.bool,

  className: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  clickHandler: () => {},
  outline: false,
  small: false,
  className: "",
};

export default Button;
