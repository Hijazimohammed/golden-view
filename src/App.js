import styled from 'styled-components';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Conteiner>
      <HomePage />
    </Conteiner>
  );
}

const Conteiner = styled.div`
  width: 100%;
  height: 100%;
`;
export default App;
