import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
