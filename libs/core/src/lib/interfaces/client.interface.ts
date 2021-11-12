import { CONSULTATION_FORMAT, IPsychologist, IPsychologistSchedule, ISubject } from '@psycho/core';
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

export interface ISetPsychologistRatingBody {
  psychologist_id: number;
  rating: number;
  review: string;
}

export interface IClientConsultation {
  id: number;
  status: 0 | 1;
  subject?: ISubject;
  schedule?: IPsychologistSchedule,
  client?: IClient;
  psychologist?: IPsychologist;
  format?: CONSULTATION_FORMAT,
  price?: number
}

export interface IClientConsultationQueryParams {
  receiver_id: number;
  page?: number;
  limit?: number;
  expand?: string;
  status?: number;
}

export interface IClientCardOperation {
  consultation: IClientConsultation;
  payment_datetime: number;
  status: string;
}