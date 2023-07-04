import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-4 py-7">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
