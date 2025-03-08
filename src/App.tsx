import React from 'react';
import Terminal from './components/Terminal';
import { createGlobalStyle } from 'styled-components';
import { catppuccinMocha } from './styles/catppuccin';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    background-color: ${catppuccinMocha.base};
    font-family: 'JetBrains Mono', monospace;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Terminal />
    </>
  );
};

export default App;
