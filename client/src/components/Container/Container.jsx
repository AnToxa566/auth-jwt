import PropTypes from "prop-types";

const Container = ({ className, children }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Container.defaultProps = {
  className: "",
};

export default Container;
