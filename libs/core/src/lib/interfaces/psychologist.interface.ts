import { ISubject } from './subject.interface';

export interface IPsychologist {
  first_name: string;
  last_name: string;
  middle_name: string;
  birthday: number;
  experience_since: number;
  has_degree: boolean;
  phone: string;
  email: string;
  avatar: string;
  subjects: ISubject[];
  rating: number;
  slogan: string;
  id: number;
  education?: string;
  description?: string;
}

export interface IPsychologistSearchParams {
  limit?: number;
  fio?: string;
  top?: 1 | 0;
  expand?: string;
}