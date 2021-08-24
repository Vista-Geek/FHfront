import Input from "@components/Inputs";
import React from "react";
import { FormI } from "@interfaces/Form.interface";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@components/Buttons/Button";
interface FormProps {
  InfoForm: FormI;
  handleSubmit: (values: Record<string, unknown>) => void;
  titleHidden: boolean;
  descHidden: boolean;
  title?: string;
  desc?: string;
  titleButton?: string;
  registerC?: boolean;
}

const Form: React.FC<FormProps> = ({
  InfoForm,
  handleSubmit: handleOnsubmit,
  title,
  titleHidden,
  descHidden = false,
  desc,
  children,
  titleButton,
  registerC,
}) => {
  // obtener valor inicial del formValues por medio del valor del prop InfoForm
  const valueKeys = InfoForm.reduce(
    (acc, curr, val) => ({ [curr.id]: "", ...acc }),
    {}
  );
  type KeysForm = typeof valueKeys;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit: SubmitHandler<KeysForm> = (e) => {
    handleOnsubmit(e);
  };
  return (
    <form className="px-2 font-herbo " onSubmit={handleSubmit(handleOnSubmit)}>
      {!titleHidden && (
        <h3 className="border-b border-purpleCust-light text-2xl sm:text-3xl font-display pb-2 font-bold">
          {title}
        </h3>
      )}
      <div className={`${registerC && "grid grid-cols-2"}`}>
        {InfoForm.map((input) => (
          <div key={input.id} className="mx-2">
            <Input
              label={input.label}
              id={input.id}
              {...register(input.label, input.options)}
              message={input.message}
              fieldError={errors[input.label]}
              type={input.type}
            />
          </div>
        ))}
      </div>

      {!descHidden && <p className="my-4 ">{desc}</p>}
      {children ? (
        children
      ) : (
        <div className="flex justify-end">
          <Button
            type="submit"
            width="w-3/6"
            title={titleButton}
            classnames="bg-purpleCust my-4 self-end"
          />
        </div>
      )}
    </form>
  );
};

export default Form;
