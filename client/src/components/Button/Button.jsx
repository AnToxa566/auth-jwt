import PropTypes from "prop-types";

const Button = ({ type, clickHandler, title, outline, className }) => {
  const baseStyle = "bg-blue-700 text-white";
  const outlineStyle = "border-2 border-blue-700 bg-transparent text-blue-700";

  const btnStyle = outline ? outlineStyle : baseStyle;

  return (
    <button
      type={type}
      onClick={clickHandler}
      className={`rounded px-8 py-3 font-medium ${btnStyle} ${className}`}
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
  className: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  clickHandler: () => {},
  outline: false,
  className: "",
};

export default Button;
