import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

import LoginForm from "@cmp/common/forms/LoginForm/LoginForm";
import FormModal from "@cmp/common/modals/FormModal/FormModal";

import { APP_ROTES } from "@/constants";
import { StoreContext } from "@/context/storeContext";

const LoginPage = observer(() => {
  const { authStore } = useContext(StoreContext);

  return authStore.isAuth ? (
    <Navigate to={APP_ROTES.HOME} replace={true} />
  ) : (
    <FormModal title="Log in to your account" formElement={<LoginForm />} />
  );
});

export default LoginPage;
