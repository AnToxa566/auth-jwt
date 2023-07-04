import PropTypes from "prop-types";

const Modal = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
      <div className="rounded-md bg-white p-12 drop-shadow">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
