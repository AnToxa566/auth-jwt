import { useContext } from "react";
import { observer } from "mobx-react-lite";

import NavLink from "../NavLink/NavLink";
import { StoreContext } from "../../context/storeContext";

const Nav = observer(() => {
  const { authStore } = useContext(StoreContext);

  const links = [
    {
      to: "/singup",
      title: "SingUp",
      auth: false,
    },
    {
      to: "/login",
      title: "LogIn",
      auth: false,
    },
    {
      to: "/logout",
      title: "Logout",
      auth: true,
    },
  ];

  return (
    <nav className="flex gap-4">
      {links.map(
        (link) =>
          link.auth === authStore.isAuth && (
            <NavLink key={link.title} to={link.to} title={link.title} />
          )
      )}
    </nav>
  );
});

export default Nav;
