import PropTypes from "prop-types";

const UserListItem = ({ title, className }) => {
  return (
    <div className={`${className} rounded bg-white px-6 py-4 drop-shadow`}>
      <span className="font-light text-blue-500">Email:</span>{" "}
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
