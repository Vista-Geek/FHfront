// Generated by https://quicktype.io

export interface LoginResponse {
  messageStatus: string;
  data: Data;
  status: number;
}

export interface Data {
  token: string;
  user: User;
}

export interface User {
  discord: boolean;
  idDiscord: string;
  rol: string;
  _id: string;
  name: string;
  lastname: string;
  email: string;
  nickname: string;
  worldName: string;
  FFXIVCharacter: string;
}

export interface LoginData {
  email: string;
  password: string;
}