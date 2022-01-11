export default function Checkbox({ name, value, onCheckboxChange, children }) {
  return (
    <label style={{ padding: '1.1rem 0.4rem 0' }}>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={onCheckboxChange}
        checked={value}
      />{' '}
      {children}
    </label>
  );
}
