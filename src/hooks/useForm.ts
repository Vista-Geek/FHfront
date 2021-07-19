import { HandleInputChangeType } from "@interfaces/general.interface";
import { useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState);

  const reset = () => setValues(initialState);

  const handleInputChange = ({ target }: HandleInputChangeType) =>
    setValues({
      ...values,
      [target.name]: target.value,
    });

  const handleCustomInputChange = (name: string, value: unknown) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  return { values, handleInputChange, reset, handleCustomInputChange };
};
