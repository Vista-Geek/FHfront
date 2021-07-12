import Form from '@components/Form/Form';
import React from 'react';
import { InfoForm } from '../../data/profile.form';

const Edit = () => {
  return (
    <div>
      <Form InfoForm={InfoForm} />
    </div>
  );
};

export default Edit;
