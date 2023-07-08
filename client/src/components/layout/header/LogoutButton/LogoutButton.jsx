import { useContext } from "react";

import Button from "@cmp/common/ui/Button/Button";

import { BUTTON_TITLES } from "@/constants";
import { StoreContext } from "@/context/storeContext";

const LogoutButton = () => {
  const { authStore } = useContext(StoreContext);

  const handleClick = async () => {
    await authStore.logout();
  };

  return (
    <Button
      title={BUTTON_TITLES.LOGOUT}
      clickHandler={handleClick}
      outline
      small
    />
  );
};

export default LogoutButton;
