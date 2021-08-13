import { ChangeEvent } from "react";
import { RegisterOptions } from "react-hook-form";

export interface InputI {
  type: "password" | "email" | "text";
  id: string;
  label: string;
  autocomplete?: boolean;
  classnames?: string;
  options?: RegisterOptions;
  message: string;
}

export interface InputHandler extends InputI {
  value: string;
  HandleInputChange: ({
    target,
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}

export type FormI = InputI[];
