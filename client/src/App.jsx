import { useEffect, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

import PageLoading from "@cmp/layout/PageLoading/PageLoading";
import Notification from "@cmp/common/ui/Notification/Notification";
import Container from "@cmp/layout/Container/Container";
import Header from "@cmp/layout/header/Header/Header";

import MainPage from "@pages/MainPage/MainPage";
import LoginPage from "@pages/LoginPage/LoginPage";
import SingupPage from "@pages/SingupPage/SingupPage";

import { StoreContext } from "@/context/storeContext";
import { APP_ROTES, LOCAL_STORAGE_KEYS } from "@/constants";

const App = observer(() => {
  const { authStore, notificationStore } = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthed = await authStore.checkAuth();

      if (!isAuthed) {
        notificationStore.hiddenNotification();
      }
    };

    if (localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN)) {
      checkAuth();
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [authStore, notificationStore]);

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <div>
          <Container className="relative">
            <Header />

            <Routes>
              <Route path={APP_ROTES.HOME} element={<MainPage />} />
              <Route path={APP_ROTES.LOGIN} element={<LoginPage />} />
              <Route path={APP_ROTES.SINGUP} element={<SingupPage />} />
            </Routes>
          </Container>

          <Notification className="fixed bottom-10 right-10" />

          <img
            className="absolute bottom-0 right-0 -z-10"
            src="/assets/images/bg-lg-image.png"
            alt=""
          />
        </div>
      )}
    </>
  );
});

export default App;
