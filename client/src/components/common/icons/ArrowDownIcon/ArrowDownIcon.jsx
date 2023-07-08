import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { ICON_COLORS } from "@/constants";

const ArrowDownIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faArrowDown}
      size="xl"
      style={{ color: ICON_COLORS.BLUE }}
    />
  );
};

export default ArrowDownIcon;
