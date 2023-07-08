import { useContext } from "react";
import { observer } from "mobx-react-lite";
import PropTypes from "prop-types";

import UserListItem from "../UserListItem/UserListItem";
import { StoreContext } from "../../context/storeContext";

const UserList = observer(({ className }) => {
  const { userStore } = useContext(StoreContext);

  return (
    <div
      className={`${className} w-fit rounded border-2 border-blue-700 px-4 py-6 text-center`}
    >
      {userStore.users.length ? (
        <div className="flex flex-col gap-6">
          {userStore.users.map((user) => (
            <UserListItem key={user.id} title={user.email} />
          ))}
        </div>
      ) : (
        <div className="text-blue-700">User list is currently empty</div>
      )}
    </div>
  );
});

UserList.propTypes = {
  className: PropTypes.string,
};

UserList.defaultProps = {
  className: "",
};

export default UserList;
