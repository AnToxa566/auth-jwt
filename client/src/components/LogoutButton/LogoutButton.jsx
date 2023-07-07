import { useContext } from "react";

import Button from "../Button/Button";
import { StoreContext } from "../../context/storeContext";

const LogoutButton = () => {
  const { authStore } = useContext(StoreContext);

  const handleClick = async () => {
    await authStore.logout();
  };

  return <Button title="Logout" clickHandler={handleClick} outline small />;
};

export default LogoutButton;
