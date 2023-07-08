import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import { ICON_COLORS } from "@/constants";

const ErrorIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faCircleXmark}
      size="xl"
      style={{ color: ICON_COLORS.DANGER }}
    />
  );
};

export default ErrorIcon;
