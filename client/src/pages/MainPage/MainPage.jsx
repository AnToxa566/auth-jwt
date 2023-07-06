import Button from "../../components/Button/Button";

import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

const MainPage = () => {
  const { userStore } = useContext(StoreContext);

  const fetchUsers = async () => {
    await userStore.fetchUsers();
  };

  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center text-center xl:max-w-[80%] 2xl:max-w-[70%]">
      <h1 className="mb-16 text-5xl font-bold md:text-7xl">
        Check How Authorization Works With JWT
      </h1>

      <p className="mb-16 text-base font-light md:text-xl">
        Try to get users without being logged in, then log in and try again 👇
      </p>

      <div className="flex flex-col-reverse gap-4 sm:flex-row">
        <Button title="Source on GitHub" />
        <Button title="Get Users →" clickHandler={fetchUsers} outline />
      </div>

      <img
        className="invisible absolute left-[25%] top-[25%] -z-10 lg:visible"
        src="src/assets/images/bg-sm-image.png"
        alt=""
      />
    </div>
  );
};

export default MainPage;
