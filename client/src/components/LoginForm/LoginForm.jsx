import { Link } from "react-router-dom";

import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginForm = () => {
  return (
    <>
      <form className="space-y-6" action="#" method="POST">
        <Input type="email" name="email" label="Email address" required />
        <Input type="password" name="password" label="Password" required />

        <Button type="submit" title="Log in" className="w-full" />
      </form>

      <p className="mt-10 flex items-center justify-between text-center text-sm text-gray-500">
        <p className="mr-2">Not a member?</p>

        <Link
          to="/singup"
          className="font-semibold leading-6 text-blue-700 hover:text-blue-500"
        >
          Sing up a new account
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
