import React from 'react';
import { InputI } from '@interfaces/Form.interface';

const Input: React.FC<InputI> = ({
  type,
  id,
  label,
  autocomplete = false,
  classnames = 'w-10/12'
}) => (
  <div className={`flex flex-col m-auto mt-4 text-left ${classnames}`}>
    <label htmlFor={id} className="mb-1">
      {label}
    </label>
    <input
      type={type}
      placeholder={label}
      name={id}
      id={id}
      className="custom-input form-input transition-all"
      autoFocus
      autoComplete={autocomplete ? 'on' : 'off'}
    />
  </div>
);

export default Input;
