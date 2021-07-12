export interface InputI {
  type: 'password' | 'email' | 'text';
  id: string;
  label: string;
  autocomplete?: boolean;
  classnames?: string;
}

export type FormI = InputI[];
