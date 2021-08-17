import { FormI } from "../interfaces/Form.interface";

export const patternEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const AuthData: FormI = [
  {
    type: "text",
    label: "email",
    id: "email",
    options: {
      required: true,
      pattern: patternEmail,
    },
    message: "No valid Email Address",
  },
  {
    type: "password",
    label: "password",
    id: "password",
    options: {
      required: true,
      minLength: 5,
    },
    message: "No valid password, min lenght: 5",
  },
];

export const AuthDataRegister: FormI = [
  {
    type: "text",
    label: "name",
    id: "name",
    options: {
      required: true,
      minLength: 5,
    },
    message: "No valid name, min lenght: 5",
  },
  {
    type: "text",
    label: "lastname",
    id: "lastname",
    options: {
      required: true,
      minLength: 5,
    },
    message: "No valid lastname, min lenght: 5",
  },
  {
    type: "password",
    label: "Password",
    id: "password",
    options: {
      required: true,
      minLength: 5,
    },
    message: "Incorrect password, min lenght: 5",
  },
  {
    type: "email",
    label: "email",
    id: "email",
    options: {
      required: true,
      pattern: patternEmail,
    },
    message: "Email Address no valid",
  },
  {
    type: "text",
    label: "nickname",
    id: "nickname",
    options: {
      required: true,
      minLength: 5,
    },
    message: "No valid nickname, min lenght: 5",
  },
  {
    type: "text",
    label: "worldName",
    id: "worldName",
    options: {
      required: true,
      minLength: 5,
    },
    message: "No valid worldName, min lenght: 5",
  },
  {
    type: "text",
    label: "FFXIVCharacter",
    id: "FFXIVCharacter",
    options: {
      required: true,
      minLength: 5,
    },
    message: "No valid FFXIVCharacter, min lenght: 5",
  },
];
