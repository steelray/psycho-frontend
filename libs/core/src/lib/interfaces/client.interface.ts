import { CONSULTATION_FORMAT, CONSULTATION_STATUS, IPsychologist, IPsychologistSchedule, ISubject } from '@psycho/core';
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
  status: CONSULTATION_STATUS;
  subject?: ISubject;
  schedule?: IPsychologistSchedule,
  client?: IUser;
  psychologist?: IPsychologist;
  format?: CONSULTATION_FORMAT,
  price?: number
  is_taken?: boolean;
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