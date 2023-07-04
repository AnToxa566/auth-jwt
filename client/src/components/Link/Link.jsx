import PropTypes from "prop-types";

const Link = ({ href, title }) => {
  return (
    <a className="cursor-pointer" href={href}>
      {title}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Link.defaultProps = {
  href: "#",
};

export default Link;
