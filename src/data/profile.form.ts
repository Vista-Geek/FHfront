import { FormI } from "@interfaces/Form.interface";
export const PublicProfile: FormI = [
  {
    type: "text",
    label: "Username",
    id: "username",
    classnames: "",
  },
  {
    type: "email",
    label: "Email",
    id: "email",
    classnames: "",
  },
  {
    type: "text",
    label: "FFXIV character",
    id: "character",
    classnames: "",
  },
  {
    type: "text",
    label: "World Name",
    id: "wname",
    classnames: "",
  },
  {
    type: "text",
    label: "Discord ID",
    id: "discordId",
    classnames: "",
  },
];
export const ChangeUsername: FormI = [
  {
    type: "text",
    label: "Username",
    id: "changeusername",
    classnames: "",
  },
  {
    type: "text",
    label: "New Username",
    id: "changenewusername",
    classnames: "",
  },
];
export const ChangePassowrd: FormI = [
  {
    type: "password",
    label: "Password",
    id: "changepassword",
    classnames: "",
  },
  {
    type: "password",
    label: "New Password",
    id: "changenewpassword",
    classnames: "",
  },
  {
    type: "password",
    label: "Confirm",
    id: "changepasswordconfirm",
    classnames: "",
  },
];
