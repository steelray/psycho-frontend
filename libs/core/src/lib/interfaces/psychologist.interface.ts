import { IClientConsultation } from '@psycho/core';
import { IUser } from '.';
import { ISubject } from './subject.interface';

export interface IPsychologist extends Pick<IUser, 'isOnline'> {
  first_name: string;
  last_name: string;
  id: number;
  middle_name?: string;
  birthday?: number;
  experience_since?: number;
  has_degree?: boolean;
  phone?: string;
  email?: string;
  avatar?: string;
  subjects?: ISubject[];
  rating?: number;
  slogan?: string;
  education?: string;
  description?: string;
  last_consultation_subject?: ISubject
}

export interface IPsychologistSearchParams {
  limit?: number;
  fio?: string;
  top?: 1 | 0;
  expand?: string;
  subject_id?: number;
}

export interface IPsychologistSchedule {
  id: number;
  datetime: number;
}

export interface IGroupedSchedule {
  date: string;
  times: IGroupedScheduleTime[]
}

export interface IGroupedScheduleTime {
  id: number;
  time: number;
}

export interface IPsychologistOutput {
  payed_at: number;
  id: number;
  amount: number;
  consultation: IClientConsultation
}