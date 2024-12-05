export default function InputText({
  formData,
  name,
  text,
  handleChangeForm,
  required,
}) {
  required ?? "";
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        {text}
      </span>
      <input
        name={name}
        value={formData}
        type="text"
        className="form-control"
        placeholder="..."
        onChange={handleChangeForm}
        required={required}
      />
    </div>
  );
}
