import { IPage } from '.';

export interface ISubject {
  title: string;
  image?: string;
  image_hover?: string;
  icon?: string;
  id: number;
  isSelected?: boolean;
  page?: IPage;
}