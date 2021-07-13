import Form from "@components/Form/Form";
import React from "react";
import { PublicProfile } from "@data/profile.form";

const Edit = () => {
  return (
    <div>
      <Form
        InfoForm={PublicProfile}
        handleSubmit={(values) => console.log(values)}
        titleHidden={false}
        descHidden={false}
        title="Public Profile"
        desc="All of the fields on this page you can edited when you want."
        titleButton="Update Profile"
      />
    </div>
  );
};

export default Edit;
