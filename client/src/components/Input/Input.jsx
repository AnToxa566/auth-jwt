import PropTypes from "prop-types";

const Input = ({ label, name, type, required }) => {
  return (
    <div>
      {label ? (
        <label htmlFor={name} className="block text-sm font-medium leading-6">
          {label}
        </label>
      ) : (
        ""
      )}

      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  type: "text",
  name: "input",
  required: "",
};

export default Input;
