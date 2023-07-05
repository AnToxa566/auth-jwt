import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const ErrorIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faCircleXmark}
      size="xl"
      style={{ color: "#d62424" }}
    />
  );
};

export default ErrorIcon;
