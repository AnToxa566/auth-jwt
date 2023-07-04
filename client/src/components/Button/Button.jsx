import PropTypes from "prop-types";

const Button = ({ title, outline }) => {
  const baseColor = "blue-700";

  const styles = {
    base: `bg-${baseColor} text-white`,
    outline: `border-2 border-${baseColor} bg-transparent text-${baseColor}`,
  };

  const btnStyle = outline ? styles.outline : styles.base;

  return (
    <button className={`rounded px-8 py-3 font-medium ${btnStyle}`}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  outline: PropTypes.bool,
};

Button.defaultProps = {
  outline: false,
};

export default Button;
