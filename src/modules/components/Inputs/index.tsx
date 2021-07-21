import React from "react";
import { InputHandler } from "@interfaces/Form.interface";

const Input: React.FC<InputHandler> = ({
  type,
  id,
  label,
  autocomplete = false,
  classnames = "w-10/12",
  HandleInputChange,
  value,
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
      onChange={HandleInputChange}
      value={value}
      className="custom-input form-input transition-all"
      autoComplete={autocomplete ? "on" : "off"}
    />
  </div>
);

export default Input;
