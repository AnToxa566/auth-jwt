import SignupForm from "../../components/SignupForm/SignupForm";
import FormModal from "../../components/FormModal/FormModal";

const SingupPage = () => {
  return (
    <FormModal title="Sign up a new account" formElement={<SignupForm />} />
  );
};

export default SingupPage;
