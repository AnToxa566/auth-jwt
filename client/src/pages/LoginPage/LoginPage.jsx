import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

import LoginForm from "../../components/LoginForm/LoginForm";
import FormModal from "../../components/FormModal/FormModal";

import { StoreContext } from "../../context/storeContext";

const LoginPage = observer(() => {
  const { authStore } = useContext(StoreContext);

  return authStore.isAuth ? (
    <Navigate to="/" replace={true} />
  ) : (
    <FormModal title="Log in to your account" formElement={<LoginForm />} />
  );
});

export default LoginPage;