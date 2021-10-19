import { IUser } from './user.interface';

export interface IClient {
  id: number;
  user: IUser;
}