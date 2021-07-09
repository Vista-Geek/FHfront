import React from 'react';

interface InputProps {
  type: 'password' | 'email' | 'text';
  id: string;
  label: string;
  autocomplete?: boolean;
}

const Input: React.FC<InputProps> = ({ type, id, label, autocomplete = false }) => (
  <div className="flex flex-col w-10/12 m-auto mt-4 text-left">
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
