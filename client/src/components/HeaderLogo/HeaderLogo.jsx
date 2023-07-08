import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const HeaderLogo = () => {
  return (
    <div>
      <Link to="/">
        <Logo />
      </Link>
    </div>
  );
};

export default HeaderLogo;
