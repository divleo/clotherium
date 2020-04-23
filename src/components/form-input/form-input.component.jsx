import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, value, ...otherProps }) => (
  <div className="form-group">
    <input
      className="form-input"
      onChange={handleChange}
      value={value}
      {...otherProps}
    />
    {label ? (
      <label
        className={
          value.length ? 'form-input-label shrink' : 'form-input-label'
        }
      >
        {label}
      </label>
    ) : undefined}
  </div>
);

export default FormInput;
