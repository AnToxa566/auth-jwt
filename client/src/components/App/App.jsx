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
    </>
  );
};

export default App;
