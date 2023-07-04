import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-7">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
