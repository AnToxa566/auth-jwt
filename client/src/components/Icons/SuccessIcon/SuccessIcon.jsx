import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const SuccessIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faCircleCheck}
      size="xl"
      style={{ color: "#4ade80" }}
    />
  );
};

export default SuccessIcon;
