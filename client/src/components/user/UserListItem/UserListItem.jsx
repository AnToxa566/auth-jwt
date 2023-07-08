import PropTypes from "prop-types";

const UserListItem = ({ title, className }) => {
  return (
    <div className={`${className}`}>
      <span className="text-blue-700">Email:</span>{" "}
      <span className="font-bold text-blue-700">{title}</span>
    </div>
  );
};

UserListItem.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

UserListItem.defaultProps = {
  className: "",
};

export default UserListItem;
