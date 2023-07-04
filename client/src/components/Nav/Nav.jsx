import Link from "../Link/Link";

const Nav = () => {
  const links = [
    {
      href: "#",
      title: "SingUp",
    },
    {
      href: "#",
      title: "LogIn",
    },
  ];

  return (
    <nav className="flex gap-4">
      {links.map((link) => (
        <Link key={link.title} href={link.href} title={link.title} />
      ))}
    </nav>
  );
};

export default Nav;
