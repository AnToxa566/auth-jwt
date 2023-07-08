import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { ICON_COLORS } from "@/constants";

const XMarkIcon = () => {
  return (
    <FontAwesomeIcon icon={faXmark} style={{ color: ICON_COLORS.BLACK }} />
  );
};

export default XMarkIcon;
