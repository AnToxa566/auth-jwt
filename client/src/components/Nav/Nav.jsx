import { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Button from "../Button/Button";
import LogoutButton from "../LogoutButton/LogoutButton";
import { StoreContext } from "../../context/storeContext";

const Nav = observer(() => {
  const { authStore } = useContext(StoreContext);

  const linkButtons = [
    {
      to: "/login",
      title: "LogIn",
      outline: true,
      auth: false,
    },
    {
      to: "/singup",
      title: "SingUp",
      outline: false,
      auth: false,
    },
  ];

  const buttons = [
    {
      component: <LogoutButton key="1" />,
      auth: true,
    },
  ];

  return (
    <nav className="flex gap-4">
      {linkButtons.map(
        (link) =>
          link.auth === authStore.isAuth && (
            <Link key={link.title} to={link.to}>
              <Button title={link.title} outline={link.outline} small />
            </Link>
          )
      )}
      {buttons.map((btn) => btn.auth === authStore.isAuth && btn.component)}
    </nav>
  );
});

export default Nav;
