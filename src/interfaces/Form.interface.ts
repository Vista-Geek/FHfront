import { ChangeEvent } from 'react';

export interface InputI {
  type: 'password' | 'email' | 'text';
  id: string;
  label: string;
  autocomplete?: boolean;
  classnames?: string;
}

export interface InputHandler extends InputI {
  value: string;
  HandleInputChange: ({
    target
  }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
}

export type FormI = InputI[];
