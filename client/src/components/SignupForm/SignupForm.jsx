import { Link } from "react-router-dom";

import Input from "../Input/Input";
import Button from "../Button/Button";

const SignupForm = () => {
  return (
    <>
      <form className="space-y-6" action="#" method="POST">
        <Input type="email" name="email" label="Email address" required />
        <Input type="password" name="password" label="Password" required />

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
