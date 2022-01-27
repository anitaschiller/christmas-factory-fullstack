import { useState, createContext } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { GlobalStyle } from '../shared/GlobalStyle';

const ThemeContext = createContext();

const themes = {
  christmas: {
    title: 'christmas',
    primaryBg: '#021f13',
    secondaryBg: '#620202',
    primaryColor: '#f8b229',
    secondaryColor: '#146b3a',
    buttonBg: '#ea4630',
    warning: '#ea4630',
    favSymbolEmpty: '✩',
    favSymbolFilled: '⭐',
    headlineSymbol: '🎄',
    errorMessageSymbol: '🎅🏽',
    errorMessage: 'Ho ho ho! Please check if all fields are correctly filled.',
  },
  valentine: {
    title: "valentine's day",
    primaryBg: '#474165',
    secondaryBg: '#97354e',
    primaryColor: 'papayawhip',
    secondaryColor: '#bd3f6e',
    buttonBg: '#ea4630',
    warning: '#ea4630',
    favSymbolEmpty: '♡',
    favSymbolFilled: '♥',
    headlineSymbol: '💝',
    errorMessageSymbol: '💌',
    errorMessage:
      'My Love, could you please check if all fields are correctly filled?',
  },
};

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState(themes['christmas']); // line B - setting the initial theme

  const switchTheme = (theme) => setTheme(themes[theme]); // line C - changing the theme

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      <StyledComponentsThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
