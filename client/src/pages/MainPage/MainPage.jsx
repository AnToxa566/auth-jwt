import { useContext } from "react";

import Button from "@cmp/common/ui/Button/Button";
import UserList from "@cmp/user/UserList/UserList";
import { ArrowDownIcon } from "@cmp/common/icons/icons";

import { BUTTON_TITLES, EXTERNAL_LINKS } from "@/constants";
import { StoreContext } from "@/context/storeContext";

const MainPage = () => {
  const { userStore } = useContext(StoreContext);

  const fetchUsers = async () => {
    await userStore.fetchUsers();
  };

  return (
    <div>
      <div className="mx-auto flex h-screen flex-col items-center justify-center text-center xl:max-w-[80%] 2xl:max-w-[70%]">
        <h1 className="mb-16 text-5xl font-bold md:text-7xl">
          Check How Authorization Works With JWT
        </h1>

        <p className="mb-16 text-base font-light md:text-xl">
          Try to get users without being logged in, then log in and try again 👇
        </p>

        <div className="flex flex-col-reverse gap-4 sm:flex-row">
          <a
            href={EXTERNAL_LINKS.GITHUB_SOURCE}
            target="_blank"
            rel="noreferrer"
          >
            <Button title={BUTTON_TITLES.GITHUB_SOURCE} />
          </a>

          <Button
            title={BUTTON_TITLES.GET_USERS}
            clickHandler={fetchUsers}
            outline
          />
        </div>

        <div className="mt-16 animate-bounce">
          <p className="font-bold text-blue-700">Users List</p>
          <ArrowDownIcon />
        </div>

        <img
          className="invisible absolute left-[25%] top-[16%] -z-10 lg:visible"
          src="/assets/images/bg-sm-image.png"
          alt=""
        />
      </div>

      <UserList className="mx-auto mb-10" />
    </div>
  );
};

export default MainPage;
