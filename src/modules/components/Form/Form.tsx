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
  title = 'Change Username',
  titleHidden,
  descHidden = false,
  desc = 'All of the fields on this page you can edited when you want.',
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
        <h3 className="border-b border-purpleCust-light text-2xl">{title}</h3>
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

      {!descHidden && <p className="my-4">{desc}</p>}
      {children ? (
        children
      ) : (
        <Button
          type="submit"
          width="w-full"
          title={titleButton}
          classnames="bg-purpleCust my-4"
        />
      )}
    </form>
  );
};

export default Form;
