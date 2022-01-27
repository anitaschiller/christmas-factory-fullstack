export default function TopBar() {
  const { switchTheme } = useContext(ThemeContext);

  function setThemeState(event) {
    switchTheme(event.target.value);
  }
  return (
    <header>
      <form>
        <Select onChange={setThemeState}>
          <option>Bitte Theme auswählen:</option>
          <option value="christmas">Weihnachten</option>
          <option value="valentine">Valentinstag</option>
          <option value="easter">Ostern</option>
        </Select>
      </form>
    </header>
  );
}
