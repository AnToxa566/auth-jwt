import { Link } from "react-router-dom";
import { LogoIcon } from "@cmp/common/icons/icons.js";

const HeaderLogo = () => {
  return (
    <div>
      <Link to="/">
        <LogoIcon />
      </Link>
    </div>
  );
};

export default HeaderLogo;
