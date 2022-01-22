import { createContext } from 'react';
export const ThemeContext = createContext({
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
}); //default value
