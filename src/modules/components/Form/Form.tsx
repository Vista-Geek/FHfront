import Input from '@components/Inputs';
import React, { Fragment } from 'react';
import { FormI } from '@interfaces/Form.interface';
import { useForm } from '../../../hooks/useForm';
import Button from '@components/Buttons/Button';
interface FormProps {
  InfoForm: FormI;
  handleSubmit: (values: object) => void;
  titleHidden: boolean;
  descHidden: boolean;
  title?: string;
  desc?: string;
  titleButton?: string;
}

const Form: React.FC<FormProps> = ({
  InfoForm,
  handleSubmit,
  title,
  titleHidden,
  descHidden = false,
  desc,
  children,
  titleButton
}) => {
  //obtener valor inicial del formValues por medio del valor del prop InfoForm
  const valueKeys = InfoForm.reduce((acc, curr, val) => ({ [curr.id]: '', ...acc }), {});
  const { handleInputChange, values } = useForm(valueKeys);
  type KeysForm = keyof typeof values;
  return (
    <form
      className="px-2 font-herbo"
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(values);
      }}
    >
      {!titleHidden && (
        <h3 className="border-b border-purpleCust-light text-2xl sm:text-3xl font-display pb-2 font-bold">{title}</h3>
        
      )}
      {InfoForm.map(input => (
        <Fragment key={input.id}>
          <Input
            {...input}
            HandleInputChange={handleInputChange}
            value={values[input.id as KeysForm]}
          />
        </Fragment>
      ))}

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
