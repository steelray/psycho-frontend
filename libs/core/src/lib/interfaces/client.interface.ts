import { CONSULTATION_FORMAT } from '@psycho/core';
import { IUser } from './user.interface';

export interface IClient {
  id: number;
  user: IUser;
}

export interface IClientConsultationCreateBody {
  schedule_id: number;
  psychologist_id: number;
  format: CONSULTATION_FORMAT;
  subject_id: number;
}