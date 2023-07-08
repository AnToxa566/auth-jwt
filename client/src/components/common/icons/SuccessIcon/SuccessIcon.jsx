import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import { ICON_COLORS } from "@/constants";

const SuccessIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faCircleCheck}
      size="xl"
      style={{ color: ICON_COLORS.SUCCESS }}
    />
  );
};

export default SuccessIcon;
