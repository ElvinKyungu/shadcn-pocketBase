export interface createUSer {
  username: string;
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  avatar: string;
}

export interface creatUserWithGoogle{
  username: string;
  email: string;
  name: string;
  avatar: string;
}
export interface userLogin{
  email: string;
  password: string;
}