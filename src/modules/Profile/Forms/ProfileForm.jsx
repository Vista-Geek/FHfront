import { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import Button from "@components/Buttons/Button";
import { useForm } from "react-hook-form";
import { useProfileInputs } from "../useProfileInputs";
import { useAuth } from "@global-stores/useAuth";

const ProfileForm = ({
  formTitle,
  profileInputs,
  onSubmit,
  customInputs = [],
}) => {
  const { userData } = useAuth((state) => state);
  const [currentInputs, setCurrentInputs] = useState(
    useProfileInputs(profileInputs, userData)
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({ defaultValues: currentInputs.objects });

  return (
    <form className="px-2 font-herbo" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="border-b border-purpleCust-light text-2xl sm:text-3xl font-display pb-2 font-bold">
        {formTitle}
      </h3>
      {currentInputs.list.map((input, key) => {
        return (
          <div key={key} className={`flex flex-col m-auto mt-4 text-left `}>
            <label htmlFor={"id"} className="mb-1 capitalize">
              {input.label}
            </label>
            <input
              {...register(input.name, {
                required:
                  input.name !== "idDiscord" && "This is a required input.",
                minLength: input.type === "password" && 8,
              })}
              placeholder={input.placeholder}
              name={input.name}
              type={input.type}
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

      {customInputs.map((input, key) => {
        return (
          <div key={key} className={`flex flex-col m-auto mt-4 text-left `}>
            <label htmlFor={"id"} className="mb-1 capitalize">
              {input.label}
            </label>
            <input
              {...register(input.name, {
                required:
                  input.name !== "idDiscord" && "This is a required input.",
                minLength: input.type === "password" && 8,
              })}
              placeholder={input.placeholder}
              name={input.name}
              type={input.type}
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

export default ProfileForm;
