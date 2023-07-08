import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { StoreContext } from "@/context/storeContext";

import Input from "@cmp/common/ui/Input/Input";
import Button from "@cmp/common/ui/Button/Button";

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

        <Button type="submit" title="Sign up" className="w-full" />
      </form>

      <div className="mt-10 flex items-center justify-between text-center text-sm text-gray-500">
        <p className="mr-2">Already signed up?</p>

        <Link
          to="/login"
          className="font-semibold leading-6 text-blue-700 hover:text-blue-500"
        >
          Log in to your account
        </Link>
      </div>
    </>
  );
};

export default SignupForm;
