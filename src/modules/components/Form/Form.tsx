import Input from '@components/Inputs';
import React, { Fragment } from 'react';
import { FormI } from '@interfaces/Form.interface';
import { useForm } from '../../../hooks/useForm';

const Form = () => {
  const {} = useForm({});
  const InfoForm: FormI = [
    {
      type: 'text',
      label: 'Username',
      id: 'username',
      classnames: ''
    },
    {
      type: 'text',
      label: 'Email',
      id: 'email',
      classnames: ''
    },
    {
      type: 'text',
      label: 'FFXIV character',
      id: 'character',
      classnames: ''
    },
    {
      type: 'text',
      label: 'World Name',
      id: 'wname',
      classnames: ''
    },
    {
      type: 'text',
      label: 'Discord ID',
      id: 'discordId',
      classnames: ''
    }
  ];
  return (
    <form action="" className="px-2">
      <h3 className="border-b border-purpleCust-light text-2xl">Change Username</h3>
      {InfoForm.map(input => (
        <Fragment key={input.id}>
          <Input {...input} />
        </Fragment>
      ))}
    </form>
  );
};

export default Form;
