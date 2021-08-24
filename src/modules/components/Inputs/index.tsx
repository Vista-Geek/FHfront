import React, { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  classnames?: string;
  message: string;
  fieldError: string;
};
interface IFormValues {
  name: string;
  password: string;
}

const InputComponent = React.forwardRef<
  HTMLInputElement,
  InputProps & ReturnType<UseFormRegister<IFormValues>>
>(({ id, label, message, fieldError, ...props }, ref) => (
  <div className={`flex flex-col m-auto mt-4 text-left `}>
    <label htmlFor={id} className="mb-1 capitalize">
      {label}
    </label>
    <input
      {...props}
      ref={ref}
      placeholder={label}
      className="custom-input form-input transition-all"
      /* autoComplete={autocomplete ? "on" : "off"} */
    />
    {fieldError && <small className="text-red-500 mt-2">{message}</small>}
  </div>
));

InputComponent.displayName = "InputComponent";

export default InputComponent;
