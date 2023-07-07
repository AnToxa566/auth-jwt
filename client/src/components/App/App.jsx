import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

import Notification from "../Notification/Notification";
import Container from "../Container/Container";
import Header from "../Header/Header";

import MainPage from "../../pages/MainPage/MainPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SingupPage from "../../pages/SingupPage/SingupPage";

import { StoreContext } from "../../context/storeContext";

const App = observer(() => {
  const { authStore } = useContext(StoreContext);

  useEffect(() => {
    const checkAuth = async () => {
      await authStore.checkAuth();
    };

    checkAuth();
  }, []);

  return (
    <>
      {!authStore.isAuthChecked ? (
        <p>Loading...</p> // TODO: Loading Component
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
