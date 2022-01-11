function NumberInput({ name, value, onNumberInputChange, children }) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        type="number"
        id={name}
        name={name}
        onChange={onNumberInputChange}
        value={value}
      />
    </>
  );
}

export default NumberInput;
