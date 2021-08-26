import Modal from "react-modal";
import React, { useState } from "react";
import { useAuth } from "@global-stores/useAuth";
import { editProfileUse } from "src/services/users.service";
import ProfileForm from "./Forms/ProfileForm";
import PasswordForm from "./Forms/PasswordForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#201536",
  },
};

const EditAccount = () => {
  const { userData, updateUserData } = useAuth((state) => state);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const onSubmitProfileInfo = async (data) => {
    const res = await editProfileUse(userData?._id, data);
    if (res.status === 200) {
      updateUserData(res.data);
      openModal();
      setTimeout(() => {
        closeModal();
      }, 3000);
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="font-herbo">Profile info updated! </h2>
      </Modal>
      <ProfileForm
        formTitle="Change Nickname"
        profileInputs={["nickname"]}
        onSubmit={onSubmitProfileInfo}
      />
      <PasswordForm />
    </div>
  );
};

export default EditAccount;
