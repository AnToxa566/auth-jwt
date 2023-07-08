import HeaderLogo from "../HeaderLogo/HeaderLogo";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-7">
      <HeaderLogo />
      <Nav />
    </header>
  );
};

export default Header;
