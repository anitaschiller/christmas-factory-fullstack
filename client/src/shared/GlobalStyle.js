import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --primary-bg: ${(props) => props.theme.primaryBg};
    --secondary-bg: ${(props) => props.theme.secondaryBg};
    --primary-color: ${(props) => props.theme.primaryColor};
    --secondary-color: ${(props) => props.theme.secondaryColor};
    --highlight-color:  ${(props) => props.theme.highlightColor};
    --button-bg: #ea4630;
    --warning: #ea4630;
  }

  html {
    height: 100vh;
  }
  body {
    font-family: sans-serif;
    background: var(--primary-bg);
    color: var(--primary-color);
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;
