export interface IUser {
  id: number;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  birthday?: number;
  avatar?: string;
  email?: string;
  isOnline?: boolean;
}
export interface IUserAuthData {
  token?: string;
  is_client?: boolean;
  is_psychologist?: boolean;
  id?: number;
  avatar?: string;
  registration_completed?: boolean;
}