import React, { useId } from 'react';

const RadioButton = ({ name, label, checked, onChange }) => {
  const id = useId();

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;