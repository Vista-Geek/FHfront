import Form from '@components/Form/Form';
import React from 'react';
import { InfoForm } from '../../data/profile.form';

const Edit = () => {
  return (
    <div>
      <Form
        InfoForm={InfoForm}
        handleSubmit={values => console.log(values)}
        titleHidden={false}
        descHidden={false}
        title="Change Username"
        desc="All of the fields on this page you can edited when you want."
        titleButton="Update Profile"
      />
    </div>
  );
};

export default Edit;
