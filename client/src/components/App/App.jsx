import { useEffect, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

import PageLoading from "../PageLoading/PageLoading";
import Notification from "../Notification/Notification";
import Container from "../Container/Container";
import Header from "../Header/Header";

import MainPage from "../../pages/MainPage/MainPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SingupPage from "../../pages/SingupPage/SingupPage";

import { StoreContext } from "../../context/storeContext";

const App = observer(() => {
  const { authStore } = useContext(StoreContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await authStore.checkAuth();

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    checkAuth();
  }, [authStore]);

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <div>
          <Container className="relative">
            <Header />

            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/singup" element={<SingupPage />} />
            </Routes>
          </Container>

          <Notification className="fixed bottom-10 right-10" />

          <img
            className="absolute bottom-0 right-0 -z-10"
            src="src/assets/images/bg-lg-image.png"
            alt=""
          />
        </div>
      )}
    </>
  );
});

export default App;
