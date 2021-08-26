import { useRef, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import Button from "@components/Buttons/Button";
import { useForm } from "react-hook-form";
import { useAuth } from "@global-stores/useAuth";

const PasswordForm = () => {
  const { userData } = useAuth((state) => state);
  const { showPass, setShowPass } = useState(false);
  const onSubmit = (data) => {
    console.log(data.password);
    console.log(data.newPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("newPassword");

  const passInputs = [
    {
      name: "password",
      label: "Password",
      type: "password",
      minLength: true,
    },
    {
      name: "newPassword",
      label: "New Password",
      type: "password",
      minLength: true,
    },
    {
      name: "confirm",
      label: "Confirm Password",
      type: "password",
      minLength: true,
    },
  ];

  return (
    <form className="px-2 font-herbo" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="border-b border-purpleCust-light text-2xl sm:text-3xl font-display pb-2 font-bold">
        {"Change Password"}
      </h3>
      {passInputs.map((input, key) => {
        return (
          <div key={key} className={`flex flex-col m-auto mt-4 text-left `}>
            <label htmlFor={"id"} className="mb-1 capitalize">
              {input.label}
            </label>
            <input
              {...register(input.name, {
                required:
                  input.name !== "idDiscord" && "This is a required input.",
                minLength: input.minLength && 8,
                validate:
                  input.name === "confirm" &&
                  ((value) =>
                    value === password.current || "The passwords do not match"),
              })}
              placeholder={input.placeholder}
              name={input.name}
              type={showPass ? "text" : input.type}
              className="custom-input form-input transition-all"
            />
            <ErrorMessage
              name={input.name}
              errors={errors}
              render={({ message }) => {
                const lenghtMessage = "At least 8 characters.";
                return (
                  <p className="text-red-500 mt-2">
                    {message || lenghtMessage}
                  </p>
                );
              }}
            />
          </div>
        );
      })}

      <div className="flex justify-end">
        <Button
          disabled={!isDirty}
          cursor={!isDirty ? "not-allowed" : "pointer"}
          type="submit"
          width="w-3/6"
          title={"Submit"}
          classnames="bg-purpleCust my-4 self-end"
        />
      </div>
    </form>
  );
};

export default PasswordForm;
