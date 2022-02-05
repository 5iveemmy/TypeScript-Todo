import styled from "styled-components";
import TodoApp from "./components/TodoApp";
import { Container, GlobalStyle } from "./styles/global";

const ForApp = styled.div`
  background-color: #0a0707;
  color: #fff;
`;

function App() {
  return (
    <>
      <ForApp>
        <Container>
          <GlobalStyle />
          <TodoApp />
        </Container>
      </ForApp>
    </>
  );
}

export default App;
