import Form from "@components/Form/Form";
import React from "react";
import { ChangeUsername, ChangePassowrd } from "@data/profile.form";

const EditAccount = () => {
  return (
    <div>
      <div>
        <Form
          InfoForm={ChangeUsername}
          handleSubmit={(values) => console.log(values)}
          titleHidden={false}
          descHidden
          title="Change Username"
          titleButton="Update Profile"
        />
      </div>
      <div className="mt-7">
        <Form
          InfoForm={ChangePassowrd}
          handleSubmit={(values) => console.log(values)}
          titleHidden={false}
          descHidden
          title="Change Password"
          titleButton="Update Profile"
        />
      </div>
    </div>
  );
};

export default EditAccount;
