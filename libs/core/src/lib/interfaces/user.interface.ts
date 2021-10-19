export interface IUser {
  id: number;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  birthday?: number;
  avatar?: string;
}
export interface IUserAuthData {
  token: string;
  is_client: boolean;
  is_psychologis: boolean;
}