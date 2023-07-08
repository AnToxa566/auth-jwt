import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";

import SignupForm from "@cmp/common/forms/SignupForm/SignupForm";
import FormModal from "@cmp/common/modals/FormModal/FormModal";

import { StoreContext } from "@/context/storeContext";

const SingupPage = observer(() => {
  const { authStore } = useContext(StoreContext);

  return authStore.isAuth ? (
    <Navigate to="/" replace={true} />
  ) : (
    <FormModal title="Sign up a new account" formElement={<SignupForm />} />
  );
});

export default SingupPage;
