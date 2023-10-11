export interface IWatch {
  _id?: string;
  name: string;
  image: string;
  price: number;
  status: string;
  rating: number;
  description: string;
  comments: { name: string; comment: string }[];
}

export interface signUpData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface signInData {
  email: string;
  password: string;
}
