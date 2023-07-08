import PropTypes from "prop-types";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { SuccessIcon, ErrorIcon, XMarkIcon } from "@cmp/common/icons/icons.js";
import { StoreContext } from "@/context/storeContext.js";

const Notification = observer(({ className }) => {
  const { notificationStore } = useContext(StoreContext);

  return (
    <div
      className={`flex rounded-lg bg-white p-4 drop-shadow-lg ${notificationStore.style} ${className}`}
    >
      <div className="adnimate-bounce">
        {notificationStore.isError ? <ErrorIcon /> : <SuccessIcon />}
      </div>

      <div className="ml-3 flex flex-col pt-0.5 text-left text-sm">
        <p className="font-medium">{notificationStore.title}</p>
        <p className="mt-1">{notificationStore.message}</p>
      </div>

      <div className="ml-4">
        <button onClick={() => notificationStore.hiddenNotification()}>
          {<XMarkIcon />}
        </button>
      </div>
    </div>
  );
});

Notification.propTypes = {
  className: PropTypes.string,
};

Notification.defaultProps = {
  className: "",
};

export default Notification;
