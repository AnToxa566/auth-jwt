import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FormFooter = ({ question, to, linkTitle }) => {
  return (
    <div className="mt-10 flex items-center justify-between text-center text-sm text-gray-500">
      <p className="mr-2">{question}</p>

      <Link
        to={to}
        className="font-semibold leading-6 text-blue-700 hover:text-blue-500"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

FormFooter.propTypes = {
  question: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
};

export default FormFooter;
