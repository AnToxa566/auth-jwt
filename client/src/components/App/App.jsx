import { Routes, Route } from "react-router-dom";

import Container from "../Container/Container";
import Header from "../Header/Header";

import MainPage from "../../pages/MainPage/MainPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SingupPage from "../../pages/SingupPage/SingupPage";

const App = () => {
  return (
    <>
      <Container className="relative">
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/singup" element={<SingupPage />} />
        </Routes>
      </Container>

      <img
        className="absolute bottom-0 right-0"
        src="src/assets/images/bg-lg-image.png"
        alt=""
      />
    </>
  );
};

export default App;
