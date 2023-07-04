import NavLink from "../NavLink/NavLink";

const Nav = () => {
  const links = [
    {
      to: "/singup",
      title: "SingUp",
    },
    {
      to: "/logIn",
      title: "LogIn",
    },
  ];

  return (
    <nav className="flex gap-4">
      {links.map((link) => (
        <NavLink key={link.title} to={link.to} title={link.title} />
      ))}
    </nav>
  );
};

export default Nav;
