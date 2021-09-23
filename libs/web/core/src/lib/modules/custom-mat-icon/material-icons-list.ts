import { IMatIcon } from '../../interfaces';

const src = '/assets/icons/';

const commonIcons: IMatIcon[] = [
  {
    name: 'degree',
    src
  },
  {
    name: 'experience',
    src
  }
];
export const MATERIAL_ICONS_LIST: IMatIcon[] = [...commonIcons];
