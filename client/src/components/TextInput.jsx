function TextInput({ name, value, onTextInputChange, placeholder, children }) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        type="text"
        id={name}
        name={name}
        onChange={onTextInputChange}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
}

export default TextInput;
