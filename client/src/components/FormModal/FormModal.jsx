import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import Logo from "../HeaderLogo/HeaderLogo";

const FormModal = ({ title, formElement }) => {
  return (
    <Modal>
      <div className="flex flex-col items-center gap-10">
        <Logo />

        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="mt-10">{formElement}</div>
    </Modal>
  );
};

FormModal.propTypes = {
  title: PropTypes.string,
  formElement: PropTypes.element.isRequired,
};

FormModal.defaultProps = {
  title: "Form",
};

export default FormModal;
