import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <div>
      <Container>
        <Navbar />
      </Container>
    </div>
  );
};
const Container = styled.div`
  background: black;
  height: 100vh;
`;

export default App;
