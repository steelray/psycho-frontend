import { IUser } from '.';

export interface ISupport {
  message: string,
  created_at: number,
  manager: IUser | null
}