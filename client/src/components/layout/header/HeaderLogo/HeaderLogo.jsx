import { Link } from "react-router-dom";

import { APP_ROTES } from "@/constants";
import { LogoIcon } from "@cmp/common/icons/icons.js";

const HeaderLogo = () => {
  return (
    <div>
      <Link to={APP_ROTES.HOME}>
        <LogoIcon />
      </Link>
    </div>
  );
};

export default HeaderLogo;
