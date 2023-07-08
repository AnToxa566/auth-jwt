import { useState, useContext } from "react";

import { APP_ROTES, BUTTON_TITLES } from "@/constants";
import { StoreContext } from "@/context/storeContext";

import Input from "@cmp/common/ui/Input/Input";
import Button from "@cmp/common/ui/Button/Button";
import FormFooter from "@cmp/common/forms/FormFooter/FormFooter";

const SignupForm = () => {
  const { authStore } = useContext(StoreContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await authStore.registration({ email, password });
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          label="Email address"
          required
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          label="Password"
          required
        />

        <Button type="submit" title={BUTTON_TITLES.SINGUP} className="w-full" />
      </form>

      <FormFooter
        question="Already signed up?"
        linkTitle="Log in to your account"
        to={APP_ROTES.LOGIN}
      />
    </>
  );
};

export default SignupForm;
