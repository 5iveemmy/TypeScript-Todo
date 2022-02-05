import styled from "styled-components";
import TodoApp from "./components/TodoApp";
import { Container, GlobalStyle } from "./styles/global";

const ForApp = styled.div`
  background-color: #2d2d2d;
  display: flex;
  height: 100%;
  justify-content: center;
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
