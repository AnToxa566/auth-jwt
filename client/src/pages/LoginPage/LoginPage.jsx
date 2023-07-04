import LoginForm from "../../components/LoginForm/LoginForm";
import FormModal from "../../components/FormModal/FormModal";

const LoginPage = () => {
  return (
    <FormModal title="Log in to your account" formElement={<LoginForm />} />
  );
};

export default LoginPage;
