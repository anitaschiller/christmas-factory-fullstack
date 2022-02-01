import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeStore';

export default function TopBar() {
  const { theme, switchTheme } = useContext(ThemeContext);

  function setThemeState(event) {
    switchTheme(event.target.value);
  }
  return (
    <Header>
      <form>
        <Select
          onChange={setThemeState}
          data-testid="select-theme"
          value={theme.title}
        >
          <option value="">Bitte Theme auswählen:</option>
          <option value="christmas">🎅🏽 Weihnachten</option>
          <option value="valentine">💝 Valentinstag</option>
          <option value="easter">🐣 Ostern</option>
        </Select>
      </form>
    </Header>
  );
}

const Header = styled.header`
  text-align: center;
  position: absolute;
  top: 1.2rem;
  right: 10rem;
  z-index: 10;
`;

const Select = styled.select`
  border-radius: 5px;
  background: var(--secondary-color);
  border: none;
  padding: 0.5rem 0.7rem 0.5rem 0.5rem;
  margin: 0.5rem;
  color: var(--primary-color);
`;
