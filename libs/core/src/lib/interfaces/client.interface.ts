import { IUser } from './user.interface';

export interface IClient {
  id: number;
  user: IUser;
}

export interface IClientConsultationCreateBody {
  schedule_id: number;
  psychologist_id: number;
  format: number;
  subject_id: number;
}