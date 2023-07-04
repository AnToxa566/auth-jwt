import Container from "../Container/Container";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = () => {
  return (
    <>
      <Container className="relative">
        <Header />
        <Main />
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
