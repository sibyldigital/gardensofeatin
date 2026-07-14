import React from "react";

/**
 * Input — text field for quote/contact forms. Underline style (no boxed
 * border), matching the brand's open, uncluttered aesthetic. Supports
 * textarea and select variants for the intake form.
 */
export function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  textarea = false,
  options,
  required = false,
  name,
}) {
  let field;
  if (options) {
    field = (
      <select className="input__field" value={value} onChange={onChange} required={required} name={name}>
        <option value="" disabled>
          {placeholder || "Select…"}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  } else if (textarea) {
    field = (
      <textarea
        className="input__field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={4}
        required={required}
        name={name}
      />
    );
  } else {
    field = (
      <input
        className="input__field"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      />
    );
  }
  return (
    <label className="input">
      {label && <span className="input__label">{label}</span>}
      {field}
    </label>
  );
}
